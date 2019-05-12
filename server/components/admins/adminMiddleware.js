/* 3rd party modules */
const jwt = require('jsonwebtoken');
/* app modules */
const validator = require('./adminValidate');

const _middleware = {}
_middleware.validateRegister= (req, res, next) => {
    console.log(req.body)
    const { errors, isValid } = validator.validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json(errors);
    next();
  }
  module.exports=_middleware 