/* 3rd party modules */
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
/* App modules */
const pool = require('../../models/database');
const validator = require('./userValidate');
// container for Handle
const _user = {};

_user.handleJoinYoungCommunist = (req, res) => {
  const ID = req.user.ID;
  pool.query(`SELECT * FROM JOIN_YC where ID = ?`, ID)
    .then(result => {
      if (result[0]) return res.status(403).json({msg: "Form Exists"});
      
      const { RACE, RELIGION, CMND, CMND_DATE, CMND_PLACE } = req.body;
      const STATE = "Pending";
      const form = { RACE, RELIGION, CMND, CMND_DATE, CMND_PLACE, ID, STATE };
      pool.query(`INSERT INTO JOIN_YC set ?`, form)
        .then(r => {
          return res.status(200).json({ msg: "Success" });
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}

_user.handleJoinStudentCommunity = (req, res) => {
  const { joinYC, joinCP, title } = req.body;
  const form = {
    ID: req.user.ID,
    JOIN_YC_DATE: joinYC,
    join_CP_DATE: joinCP,
    TITLE: title,
    STATE: 'Pending'
  }
  pool.query(`INSERT INTO STUDENT_COMMUNITY SET ?`, form)
    .then(rs => {
      pool.query(`SELECT * FROM STUDENT_COMMUNITY WHERE ID = ?`, req.user.ID)
        .then(result => {
          if (!result[0]) return res.status(404).json({ Error: "NOT FOUND" });
          res.status(200).json(result[0]);
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}

/*
  required: validate-input, logged-in
 */
_user.handleResetPassword = (req, res) => {
  const password = req.body.password;
  bcrypt.hash(password, 10)
    .then(value => {
      pool.query(`UPDATE STUDENT set ? where ID = ?`, [{ HASHPASSWORD: value }, req.user.ID])
        .then(r => {
          res.status(200).json({ msg: "success" })
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}

/* 
  required: validate-input, logged-in
*/
_user.handleUpdate = (req, res) => {
  const { address, phone, email } = req.body;
  const updateInfo = {
    ADDRESS: address,
    PHONE: phone,
    EMAIL: email
  }
  pool.query(`UPDATE STUDENT SET ? where ID = ?`, [updateInfo, req.user.ID])
    .then(result => {
      pool.query(`SELECT ADDRESS, PHONE, EMAIL from STUDENT WHERE ID = ?`, req.user.ID)
        .then(result => {
          if (!result[0]) return res.status(404).json({ err: 'NOT FOUND' });
          res.status(200).json(result[0]);
        })
        .catch(err => res.status(500).json({ err }));

    })
    .catch(err => res.status(500).json({ err }));
}

/* 
  required: validate-input, logged-in
*/
_user.handleDetail = (req, res) => {
  const id = req.user.ID;
  pool.query(`select * from STUDENT s inner join USERTYPE u on s.UT_ID = u.UT_ID
    inner join FACULTY f on s.F_ID = f.F_ID
    inner join MAJOR m on s.M_ID = m.M_ID
    inner join CLASS c on s.C_ID = c.C_ID
    WHERE s.ID = ?`, id)
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });

      res.status(200).json(result[0]);
    })
    .catch(err => res.status(500).json({ err }));
}

/*
  Log-in
  require: validate-input, account is activated
 */
_user.handleLogIn = (req, res) => {
  const { ID, password } = req.body;
  pool.query(`SELECT * from STUDENT s inner join USERTYPE u on s.UT_ID = u.UT_ID where s.ID = ? and s.ISACTIVE = true `, ID)
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      let user = result[0];
      bcrypt.compare(password, user.HASHPASSWORD)
        .then((match) => {
          if (!match) return res.status(403).json({ error: "invalid id or password" });
          const payload = {
            ID: ID,
            FullName: result[0].FULLNAME,
            Role: result[0].ROLENAME,
          };
          jwt.sign(payload, "socialhub", { expiresIn: '1h' }, (err, token) => {
            if (err) return res.status(500).json({ err });
            res.status(200).json({
              msg: 'Login Success',
              token: 'bearer ' + token
            });
          })
        })
        .catch(err => res.status(500).json({ err }));
    })
    .catch(err => res.status(500).json({ err }));
};

/*
  required: validate-input
  1: find id in the db
  2: if id exist and not not-active => validate input and active
  3: if id exist and active => return id activated
  4: if id not-exist in db => send a request active to admin and return 404  
 */
_user.handleActivate = (req, res) => {

  let { ID, FullName, BirthDate, Faculty, Major } = req.body;
  BirthDate = new Date(BirthDate);

  pool.query(`SELECT * from STUDENT s where ID = ? and ISACTIVE = false`, ID)
    .then(result => {

      if (!result[0]) return res.status(404).json({ Error: "ID Not Found Or Already Active" });

      pool.query(`
      SELECT * from STUDENT s 
      inner join FACULTY f on s.F_ID = f.F_ID
      inner join MAJOR m on s.M_ID = m.M_ID
      where ID = ?`, ID)
        .then(result => {
          if (!result[0]) return res.status(404).json({ Error: "Information Not Found" });
          const std = {
            FullName: result[0].FULLNAME,
            Faculty: result[0].FNAME,
            Major: result[0].MNAME,
            BirthDate: result[0].BIRTHDATE
          };
          if (validator.validateInfo({ FullName, BirthDate, Faculty, Major }, std)) {
            pool.query(`UPDATE STUDENT set ISACTIVE = ? where ID = ?`, [true, ID])
              .then(result => {
                res.status(200).json({ msg: 'Activation success' });
              })
              .catch(error => res.status(404).json(error));
          } else {
            res.status(400).json({ Error: "You don't have permissions" });
          }
        })
        .catch(error => res.status(404).json(error));
    })
    .catch(error => res.status(404).json(error));
};

module.exports = _user;