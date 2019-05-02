/* 3rd party modules */
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
/* App modules */
const pool = require('../../models/database');
const validator = require('./adminValidate');
// container for Handle
const _admin = {};

_admin.handleLogin = (req, res) => {
    
}