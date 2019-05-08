/* 3rd party modules */
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
/* App modules */
const pool = require('../../models/database');
const validator = require('./adminValidate');
// container for Handle
const _admin = {};

_admin.handleLogin = (req, res) => {
    const {username,password} =req.body;
    console.log(password)
    console.log(username)
    pool.query(`SELECT * FROM  ADMINISTRATOR where USERNAME=?`,username)
    .then(result=>{
        if (!result[0]) return res.status(404).json({ error: "not found" });
        let admin = result[0];

        bcrypt.compare(password,admin.HASHPASSWORD)
        .then((match)=>{
            if (!match) return res.status(403).json({ error: "invalid id or password" });
            const payload = {
              username:username,
              fullname: result[0].FULLNAME,
              email:result[0].EMAIL,
              phone:result[0].PHONE
            };
            console.log("match")
            jwt.sign(payload, "socialhub", { expiresIn: '1h' }, (err, token) => {
                if (err) return res.status(500).json({ err });
                res.status(200).json({
                  msg: 'Login Success',
                  token: 'bearer ' + token
            });})

        })
        .catch(err=> res.status(500).json({err}));
    })
    .catch(err=> res.status(500).json({err}));
    
}
_admin.handleRegister=(req,res)=>{
    const { username, password, fullname, email,phone } = req.body;
    console.log(req.body)
    pool.query(`SELECT * FROM ADMINISTRATOR where USERNAME=?`,username)
    .then(match=>{
        if(match[0]) return res.status(403).json({error:"admin username exist"})
        bcrypt.hash(password, 10)
        .then(value=>
            {
                console.log(value)
                const admin={
                    USERNAME: username,
                    HASHPASSWORD: value,
                    FULLNAME: fullname,
                    EMAIL: email,
                    PHONE: phone,
                  };
                  pool.query(`INSERT INTO ADMINISTRATOR SET ?`,admin)
                  .then(res => {
                    res.status(200).json({ msg: "success" })
                  })
                  .catch(err => res.status(500).json(err))
            })
            .catch(err => res.status(500).json(err))

    })
    .catch(err => res.status(500).json(err))
}
_admin.handleStudentList=(req,res)=>{
    pool.query("SELECT * FROM STUDENT")
    .then(result=>{ if (!result[0]) return res.status(404).json({ error: "not found" });

    res.status(200).json(result);})
    .catch(err=>res.status(500).json(err))
}
module.exports = _admin;