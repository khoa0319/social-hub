/* 3rd party modules */
const mysql = require('mysql');
const config = require('../../config/config');
const bcrypt = require("bcrypt");
/* App modules */
const request = require('../../lib/util/requestID.js');
const helper = require('../../lib/util/formatSTUDENTdata');
/* Setup connection */
const { host, user, password, database } = config.dbConnection;
const connection = mysql.createConnection({
  host, user, password, database
})

// container for DAL
const _userData = {};

_userData.handleLogIn = (req, res, next) => {
  const { ID, password } = req.body;
  connection.query(`SELECT * from STUDENT where ID = ?`, ID, (err, result, field) => {
    if (err) return res.status(404).json({ err });
    if (!result[0]) return res.status(404).json({ err: "not found" });
    let user = result[0];
    //res.status(200).json({ msg: "login success" });
    bcrypt.compare(password, user.HASHPASSWORD)
      .then((match) => {
        if (!match) return res.status(403).json({err: "invalid id or password"});
        const payload = {
          id: user.ID,
          
        }
      })
      .catch(err => res.status(404).json({ err }))
  })
};

_userData.handleRegister = (req, res) => { 
  //6: else id not exists => cb(404)
  const { ID } = req.body;
  //1: find id in the db
  connection.query(`SELECT s.ID from STUDENT s where ID = ?`, ID, (err, result, field) => {
    if (err) return res.status(404).json({ err });
    if (result[0]) {
      const std = { ...result[0] };
      //3: if id exist and active => cb(fail)    
      if (std.active) return res.status(403).json({ err: "user already existed" })

      //2: if id exist and not not-active => cb(active)
      connection.query('UPDATE STUDENT set ACTIVE = 1 WHERE STUDENT.ID = ?', std.ID, (err, result, field) => {
        if (err) return res.status(500).json({ err });
        res.status(200).json(result[0]);
      })
    } else {
      //4: if id not-exist in db => request daotao.huflit.edu.vn
      //5: if id exist in daotao => crawl and parse and active
      request(ID, (err, data) => {
        if (err) return res.status(404).json({err: "Error requesting or Server is down"});
        if (err === "NOEXIST") return res.status(404).json({err});
        const newData = helper.getFormatData(data);
        connection.query(`INSERT INTO STUDENT SET ?`,data, (err, result, field) => {
          if (err) return res.status(500).json({err});
          connection.destroy();
          return res.status(200).json(result[0]);                    
        })
      })
    }
  })
};

module.exports = _userData;