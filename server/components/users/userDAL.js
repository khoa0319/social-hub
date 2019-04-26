/* 3rd party modules */
const bcrypt = require("bcrypt");
/* App modules */
const pool = require('../../models/database');
const _register = require('../../lib/validation/register');
// container for DAL
const _userData = {};

_userData.handleLogIn = (req, res) => {
  const { ID, password } = req.body;
  pool.query(`SELECT * from STUDENT s inner join FACULTY f on s.F_ID = f.F_ID inner join MAJOR m on s.M_ID = m.M_ID where s.ID = ? `, ID)
    .then(result => {
      if (!result[0]) return res.status(404).json({ error: "not found" });
      let user = result[0];
      bcrypt.compare(password, user.HASHPASSWORD)
        .then((match) => {
          if (!match) return res.status(403).json({ error: "invalid id or password" });
          const payload = result[0];
          res.status(200).json(payload);
        })
        .catch(err => res.status(500).json({ err }));
    })
    .catch(err => res.status(400).json({ err }));
};

/*
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

      if (!result[0]) return res.status(404).json({Error: "Not Found"});

      return pool.query(`
      SELECT * from STUDENT s 
      inner join FACULTY f on s.F_ID = f.F_ID
      inner join MAJOR m on s.M_ID = m.M_ID
      where ID = ?`, ID)
    })
    .then(result => {

      if(!result[0]) return res.status(404).json({Error: "Not Found"});
      const std = {          
        FullName: result[0].FULLNAME,        
        Faculty: result[0].FNAME,
        Major: result[0].MNAME,
        BirthDate: result[0].BIRTHDATE
      };      
      if (_register.validateInfo({ FullName, BirthDate, Faculty, Major }, std)) {
        return pool.query(`UPDATE STUDENT set ISACTIVE = ? where ID = ?`, [true, ID])          
      } else {
        res.status(400).json({Error: "You don't have permissions"});
      }
    })
    .then(result => {
      res.status(200).json({msg: 'activation success'});
    })
    .catch(error => res.status(404).json(error));
};

module.exports = _userData;