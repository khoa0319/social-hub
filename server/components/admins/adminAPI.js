/* 3rd party modules */
const express = require('express');
const router = express.Router();
const _adminHandle =require('./adminHandle')

router.post('/login',_adminHandle.handleLogin);
router.post('/register',_adminHandle.handleRegister)
module.exports = router;