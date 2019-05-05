/* 3rd party modules */
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
/* App modules */
const pool = require('../../models/database');
const validator = require('./adminValidate');
// container for Handle
const _admin = {};

_admin.handleLogin = (req, res) => {
    const {USERNAME,password} =req.body;
    pool.query(`SELECT * from  ADMINISTRATOR s where s.USERNAME=?`,USERNAME)
    .then(result=>{
        if (!result[0]) return res.status(404).json({ error: "not found" });
        let admin = result[0];
        bcrypt.compare(password,admin.HASHPASSWORD)
        .then((match)=>{
            if (!match) return res.status(403).json({ error: "invalid id or password" });
            const payload = {
              USERNAME:USERNAME,
              FullName: result[0].FULLNAME,
            };
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
    pool.query(`SELECT * from  ADMINISTRATOR s where s.USERNAME=?`,username)
    .then(match=>{
        if(match) return res.status(403).json({error:"admin username exist"})
        bcrypt.hash(password, 10)
        .then(value=>
            {
                const admin={
                    USERNAME: username,
                    PASSWORD: value,
                    FULLNAME: fullname,
                    EMAIL: email,
                    PHONE: phone,
                  };
                  pool.query(`INSERT INTO ADMINSISTRATOR SET ?`,admin)
                  .then(r => {
                    res.status(200).json({ msg: "success" })
                  })
                  .catch(err => res.status(500).json(err))
            })
            .catch(err => res.status(500).json(err))

    })
    .catch(err => res.status(500).json(err))
}
module.exports = _admin;