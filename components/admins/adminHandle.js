/* 3rd party modules */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* App modules */
const pool = require("../../models/database");
const validator = require("./adminValidate");
// container for Handle
const _admin = {};

_admin.handleLogin = (req, res) => {
  const { username, password } = req.body;
  console.log(password);
  console.log(username);
  pool
    .query(`SELECT * FROM  ADMINISTRATOR where USERNAME=?`, username)
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      let admin = result[0];

      bcrypt
        .compare(password, admin.HASHPASSWORD)
        .then(match => {
          if (!match)
            return res.status(403).json({ error: "invalid id or password" });
          const payload = {
            username: username,
            fullname: result[0].FULLNAME,
            email: result[0].EMAIL,
            phone: result[0].PHONE
          };
          console.log("match");
          jwt.sign(payload, "socialhub", { expiresIn: "1h" }, (err, token) => {
            if (err) return res.status(500).json({ err });
            res.status(200).json({
              msg: "Login Success",
              admintoken: "bearer " + token
            });
          });
        })
        .catch(err => res.status(500).json({ err }));
    })
    .catch(err => res.status(500).json({ err }));
};
_admin.handleRegister = (req, res) => {
  const { username, password, fullname, email, phone } = req.body;
  console.log(req.body);
  pool
    .query(`SELECT * FROM ADMINISTRATOR where USERNAME=?`, username)
    .then(match => {
      if (match[0])
        return res.status(403).json({ error: "admin username exist" });
      bcrypt
        .hash(password, 10)
        .then(value => {
          console.log(value);
          const admin = {
            USERNAME: username,
            HASHPASSWORD: value,
            FULLNAME: fullname,
            EMAIL: email,
            PHONE: phone
          };
          pool
            .query(`INSERT INTO ADMINISTRATOR SET ?`, admin)
            .then(res => {
              res.status(200).json({ msg: "success" });
            })
            .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
};
//student
_admin.handleStudentList = (req, res) => {
  const { skip, limit } = req.query;
  if (!skip || !limit) return res.status(400).json({ error: "invalid query " });
  pool
    .query(
      `SELECT a.ID,a.FULLNAME,b.FNAME,c.MNAME,d.CNAME,a.EMAIL,a.ADDRESS,a.EMAIL,a.ACADEMIC_YEAR,a.BIRTHDATE
    FROM STUDENT a 
    inner join FACULTY b on a.F_ID=b.F_ID 
    inner join MAJOR c on a.M_ID=c.M_ID
    inner join CLASS d on a.C_ID=d.C_ID ORDER BY a.ID LIMIT ? , ?`,
      [parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
};
//reset student
_admin.handleResetStudent = (req, res) => {
  const { ID } = req.body;
  let password = "SocialHub@123";
  pool
    .query(
      `SELECT *
    FROM STUDENT WHERE ID=? `,
      ID
    )
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      bcrypt.hash(password, 10).then(value => {
        pool
          .query(
            `UPDATE STUDENT set ISACTIVE = ?,HASHPASSWORD=? where ID = ?`,
            [false, value, ID]
          )
          .then(result => {
            res.status(200).json({ msg: "SUCCESS", id: ID });
          })
          .catch(error => res.status(404).json(error));
      });
    })
    .catch(err => res.status(500).json(err))
    .catch(err => res.status(500).json(err));
};
//student who join that activity list
_admin.handleStudentActivity = (req, res) => {
  const { skip, limit, A_ID } = req.query;
  if (!skip || !limit || !A_ID)
    return res.status(400).json({ error: "invalid query " });
  pool
    .query(
      `SELECT f.ID,a.FULLNAME,b.FNAME,c.MNAME,d.CNAME,a.EMAIL,a.ADDRESS,a.EMAIL,a.ACADEMIC_YEAR,a.BIRTHDATE,f.ST_UT_ID,f.STATE
    FROM STUDENT_ACTIVITY f 
    inner join STUDENT a on f.ID=a.ID
    inner join ACTIVITY e on f.A_ID=e.A_ID
    inner join FACULTY b on a.F_ID=b.F_ID 
    inner join MAJOR c on a.M_ID=c.M_ID
    inner join CLASS d on a.C_ID=d.C_ID
    Where f.A_ID=?
    LIMIT ?,?`,[A_ID, parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
};
// register student
_admin.handleRegisterStudentActivity = (req, res) => {
  const {ST_UT_ID} = req.body;
  pool
    .query(
      `SELECT *
    FROM STUDENT_ACTIVITY
    Where ST_UT_ID=?`,parseInt(ST_UT_ID)
    )
    .then(result => {
      if (!result[0])
        return res.status(404).json({ err: "Không tìm thấy học sinh" });
      if (result[0].STATE === "Checked-in")
        return res.status(200).json({ err: "Học sinh đã được điểm danh" });
      pool
        .query(`UPDATE STUDENT_ACTIVITY set STATE = ? where ST_UT_ID= ?`, [
          "Checked-in",
          parseInt(ST_UT_ID)
        ])
        .then(result => {
          res.status(200).json({ msg: "Success" });
        })

        .catch(err => res.status(200).json(err));
    })
    .catch(err => res.status(500).json(err));
};
_admin.handleStudentJoinCommunity = (req, res) => {
    const { skip, limit } = req.query;
    if (!skip || !limit) return res.status(400).json({ error: "invalid query " });
    pool
      .query(
    `SELECT a.ID,a.FULLNAME,b.FNAME,c.MNAME,d.CNAME,a.EMAIL,a.ADDRESS,a.EMAIL,a.ACADEMIC_YEAR,a.BIRTHDATE,f.STATE,f.SC_ID
        From STUDENT a
      inner join STUDENT_COMMUNITY f on f.ID=a.ID
      inner join FACULTY b on a.F_ID=b.F_ID 
      inner join MAJOR c on a.M_ID=c.M_ID
      inner join CLASS d on a.C_ID=d.C_ID WHERE f.STATE<>"ACCEPTED" ORDER BY f.SUBMIT LIMIT ? , ?`,
        [parseInt(skip), parseInt(limit)]
      )
      .then(result => {
        if (!result[0]) return res.status(404).json({ error: "not found" });
        res.status(200).json(result);
      })
      .catch(err => res.status(500).json(err));
  };
  _admin.handleRegisterStudentCommunity = (req, res) => {
    const {SC_ID} = req.body;
    pool
      .query(
        `SELECT *
      FROM STUDENT_COMMUNITY
      Where SC_ID=?`,parseInt(SC_ID)
      )
      .then(result => {
        if (!result[0])
          return res.status(404).json({ err: "Không tìm thấy học sinh" });
        if (result[0].STATE === "Accepted")
          return res.status(200).json({ err: "Học sinh đã được duyệt" });
        pool
          .query(`UPDATE STUDENT_COMMUNITY set STATE = ? where SC_ID= ?`, [
            "Accepted",
            parseInt(SC_ID)
          ])
          .then(result => 
            res.status(200).json({ msg: "Success" })
          )
  
          .catch(err => res.status(200).json(err));
      })
      .catch(err => res.status(500).json(err));
  };
  _admin.handleRejectStudentCommunity = (req, res) => {
    const {SC_ID} = req.body;
    pool
      .query(
        `SELECT *
      FROM STUDENT_COMMUNITY
      Where SC_ID=?`,parseInt(SC_ID))
      .then(result => {
        if (!result[0])
          return res.status(404).json({ err: "Không tìm thấy học sinh" });
        if (result[0].STATE === "Accepted")
          return res.status(200).json({ err: "Học sinh đã được duyệt" });
        pool
          .query(`UPDATE STUDENT_COMMUNITY set STATE = ? where SC_ID= ?`, [
            "Rejected",
            parseInt(SC_ID)
          ])
          .then(result => 
            res.status(200).json({ msg: "Success" })
          )
  
          .catch(err => res.status(200).json(err));
      })
      .catch(err => res.status(500).json(err));
  };
module.exports = _admin;
