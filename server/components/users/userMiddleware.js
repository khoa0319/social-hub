/* 3rd party modules */
const jwt = require('jsonwebtoken');
/* app modules */
const validator = require('../users/userValidate');

const _middleware = {}

_middleware.authenticating = (req, res, next) => {

  console.log('token: ',req.header('Authorization'));
  console.log('fingerprint: ', req.header('fingerprint'));

  const token = req.header('Authorization') || ''
  const fingerprint = req.header('fingerprint') || ''

  if (!token) res.status(400).json({error: "Token not provided"})
  try {
    const decoded = jwt.verify(token, 'socialhub' + fingerprint)
    if (decoded) {
      req.user = decoded
      console.log(decoded);
      next()
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

_middleware.validateJoinYCInput = (req, res, next) => {
  const { errors, isValid } = validator.validateJoinYC(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}

_middleware.validateRegisterInput = (req, res, next) => {  
  const { errors, isValid } = validator.validateRegisterInput(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}
_middleware.validateUpdateInput = (req, res, next) => {
  const { errors, isValid } = validator.validateUpdateInput(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}
_middleware.validateUpdatePasswordInput = (req, res, next) => {
  const { errors, isValid } = validator.validateResetPassword(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}
module.exports = _middleware;