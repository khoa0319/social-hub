/* 3rd party modules */
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
/* App modules */
const pool = require('../../models/database');
const _register = require('../../lib/validation/register');
// container for DAL
const _userData = {};

/* 
  required: validate-input, logged-in, account is active
*/
_userData.handleUpdate = (req, res) => {
  
}

/* 
  required: validate-input, logged-in, account is active
*/
_userData.handleDetail = (req, res) => {
  // TODO  validate input
  const id = req.params['id'];
  pool.query(`select * from STUDENT s inner join USERTYPE u on s.UT_ID = u.UT_ID 
    inner join FACULTY f on s.F_ID = f.F_ID 
    inner join MAJOR m on s.M_ID = m.M_ID 
    inner join CLASS c on s.C_ID = c.C_ID
    WHERE s.ID = ? and s.ISACTIVE = true`, id)
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });

      res.status(200).json(result[0]);
    })
    .catch(err => res.status(500).json({ err }));
}

/*
  require: validate-input, account is activated
 */
_userData.handleLogIn = (req, res) => {
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
_userData.handleActivate = (req, res) => {

  let { ID, FullName, BirthDate, Faculty, Major } = req.body;
  // validate input
  const { errors, isValid } = _register.validateInput({ ID, FullName, BirthDate, Faculty, Major });
  BirthDate = new Date(BirthDate);  
  if (!isValid) return res.status(400).json(errors);

  pool.query(`SELECT * from STUDENT s where ID = ?`, ID)
    .then(result => {

      if (!result[0]) return res.status(404).json({ Error: "Not Found" });

      if (result[0].ISACTIVE) return res.status(403).json({ Error: "ACCOUNT IS ACTIVE" });

      pool.query(`
      SELECT * from STUDENT s 
      inner join FACULTY f on s.F_ID = f.F_ID
      inner join MAJOR m on s.M_ID = m.M_ID
      where ID = ?`, ID)
        .then(result => {
          if (!result[0]) return res.status(404).json({ Error: "Not Found" });
          const std = {
            FullName: result[0].FULLNAME,
            Faculty: result[0].FNAME,
            Major: result[0].MNAME,
            BirthDate: result[0].BIRTHDATE
          };
          if (_register.validateInfo({ FullName, BirthDate, Faculty, Major }, std)) {
            pool.query(`UPDATE STUDENT set ISACTIVE = ? where ID = ?`, [true, ID])
              .then(result => {
                res.status(200).json({ msg: 'activation success' });
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

module.exports = _userData;