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
  pool
    .query(`SELECT * FROM  ADMINISTRATOR where USERNAME=?`, username)
    .then(result => {
      if (!result[0]) return res.status(403).json({ error: "sai tài khoản hoặc mật khẩu" });
      let admin = result[0];

      bcrypt
        .compare(password, admin.HASHPASSWORD)
        .then(match => {
          if (!match)
            return res.status(403).json({ error: "sai tài khoản hoặc mật khẩu" });
          const payload = {
            username: username,
            fullname: result[0].FULLNAME,
            email: result[0].EMAIL,
            phone: result[0].PHONE
          };

          jwt.sign(payload, "socialhub", { expiresIn: "1h" }, (err, token) => {
            if (err) return res.status(500).json({ err });
            res.status(200).json({
              msg: "Login Success",
              admintoken: token
            });
          });
        })
        .catch(err => res.status(500).json({ err }));
    })
    .catch(err => res.status(500).json({ err }));
};
_admin.handleRegister = (req, res) => {
  const { username, password, fullname, email, phone } = req.body;

  pool
    .query(`SELECT * FROM ADMINISTRATOR where USERNAME=?`, username)
    .then(match => {
      if (match[0])
        return res.status(403).json({ error: "admin username exist" });
      bcrypt
        .hash(password, 10)
        .then(value => {
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

_admin.handleCountStudentList = (req, res) => {
  pool
    .query(`SELECT count(*) as students FROM STUDENT`)
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      return res.status(200).json(result[0]);
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
    LIMIT ?,?`,
      [A_ID, parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
};
// register student
_admin.handleRegisterStudentActivity = (req, res) => {
  const { ST_UT_ID } = req.body;
  pool
    .query(
      `SELECT *
    FROM STUDENT_ACTIVITY
    Where ST_UT_ID=?`,
      parseInt(ST_UT_ID)
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
      inner join CLASS d on a.C_ID=d.C_ID WHERE f.STATE="PENDING" ORDER BY f.SUBMIT LIMIT ? , ?`,
      [parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
};
_admin.handleRegisterStudentCommunity = (req, res) => {
  const { SC_ID } = req.body;
  pool
    .query(
      `SELECT *
      FROM STUDENT_COMMUNITY
      Where SC_ID=?`,
      parseInt(SC_ID)
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
        .then(result => res.status(200).json({ msg: "Success" }))

        .catch(err => res.status(200).json(err));
    })
    .catch(err => res.status(500).json(err));
};
_admin.handleRejectStudentCommunity = (req, res) => {
  const { SC_ID } = req.body;
  pool
    .query(
      `SELECT *
      FROM STUDENT_COMMUNITY
      Where SC_ID=?`,
      parseInt(SC_ID)
    )
    .then(result => {
      if (!result[0])
        return res.status(404).json({ err: "Không tìm thấy học sinh" });
      if (result[0].STATE === "Rejected")
        return res.status(200).json({ err: "Học sinh đã được duyệt" });
      pool
        .query(`UPDATE STUDENT_COMMUNITY set STATE = ? where SC_ID= ?`, [
          "Rejected",
          parseInt(SC_ID)
        ])
        .then(result => res.status(200).json({ msg: "Success" }))

        .catch(err => res.status(200).json(err));
    })
    .catch(err => res.status(500).json(err));
};
_admin.handleAcceptYouthCommunity = (req, res) => {
  const {
    CMND,
    RACE,
    RELIGION,
    CMND_DATE,
    CMND_PLACE,
    JYC_ID,
    APPROVAL_NUMBER,
    SIGNED_DATE,
    SIGNED_APPROVAL,
    SIGNED_PLACE,
    AMOUNT,
    TDATE
  } = req.body;
  pool
    .query(
      `SELECT *
      FROM JOIN_YC
      Where JYC_ID=?`,
      parseInt(JYC_ID)
    )
    .then(result => {
      if (!result[0])
        return res.status(404).json({ err: "Không tìm thấy học sinh" });
      if (result[0].STATE === "ACCEPTED")
        return res.status(200).json({ err: "Học sinh đã được duyệt" });
      pool
        .query(
          `UPDATE JOIN_YC set STATE = ?,CMND=?,
          RACE=?,
          RELIGION=?,
          CMND_DATE=?,
          CMND_PLACE=?,APPROVAL_NUMBER=?,SIGNED_DATE=?,SIGNED_PLACE=?,SIGNED_APPROVAL=? where JYC_ID= ?`,
          [
            "ACCEPTED",
            parseInt(CMND),
            RACE,
            RELIGION,
            CMND_DATE,
            CMND_PLACE,
            parseInt(APPROVAL_NUMBER),
            SIGNED_DATE,
            SIGNED_PLACE,
            SIGNED_APPROVAL,
            parseInt(JYC_ID)
          ]
        )
        .then(result => {
          pool
            .query(`SELECT * FROM YC_FEE WHERE JYC_ID=?`, [parseInt(JYC_ID)])
            .then(result => {
              if (result[0]) {
                pool
                  .query(`UPDATE YC_FEE set AMOUNT=?,T_DATE=? WHERE ID=?`, [
                    parseInt(AMOUNT),
                    TDATE,
                    result[0].ID
                  ])
                  .then(result =>
                    res.status(200).json({ msg: "Update Success" })
                  )
                  .catch(err => res.status(200).json(err));
              } else {
                pool
                  .query(`INSERT INTO YC_FEE SET ? `, {
                    AMOUNT: parseInt(AMOUNT),
                    T_DATE: TDATE,
                    JYC_ID: parseInt(JYC_ID)
                  })
                  .then(result => {
                    res.status(200).json({ msg: "Insert Success" });
                  })
                  .catch(err => res.status(200).json(err));
              }
            })
            .catch(err => res.status(200).json(err));
        })
        .catch(err => res.status(200).json(err));
    })
    .catch(err => res.status(500).json(err));
};
_admin.handleRejectYouthCommunity = (req, res) => {
  const { JYC_ID } = req.body;
  pool
    .query(
      `SELECT *
      FROM JOIN_YC
      Where JYC_ID=?`,
      parseInt(JYC_ID)
    )
    .then(result => {
      if (!result[0])
        return res.status(404).json({ err: "Không tìm thấy học sinh" });
      if (result[0].STATE === "ACCEPTED")
        return res.status(200).json({ err: "Học sinh đã được duyệt" });
      pool
        .query(`UPDATE JOIN_YC set STATE = ? where JYC_ID= ?`, [
          "REJECT",
          parseInt(JYC_ID)
        ])
        .then(result => res.status(200).json({ msg: "Recjected Success" }))
        .catch(err => res.status(200).json(err));
    })
    .catch(err => res.status(500).json(err));
};
_admin.handleListYouthCommunity = (req, res) => {
  const { skip, limit } = req.query;
  if (!skip || !limit) return res.status(400).json({ error: "invalid query " });
  pool
    .query(
      `SELECT a.ID,a.FULLNAME,b.FNAME,c.MNAME,d.CNAME,a.EMAIL,a.ADDRESS,a.EMAIL,a.ACADEMIC_YEAR,a.BIRTHDATE,f.*
      From JOIN_YC f
      inner join STUDENT a on f.ID=a.ID
      inner join FACULTY b on a.F_ID=b.F_ID 
      inner join MAJOR c on a.M_ID=c.M_ID
      inner join CLASS d on a.C_ID=d.C_ID LIMIT ? , ?`,
      [parseInt(skip), parseInt(limit)]
    )
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
};

_admin.handleClass= (req, res) => {
  pool
    .query(`SELECT * FROM CLASS a ORDER BY a.CNAME`)
    .then(result => {
     res.status(200).json(result)
    })
    .catch(err => res.status(500).json(err));
};

module.exports = _admin;
// res.status(200).json({ msg: "Success" })})
