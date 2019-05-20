/* 3rd party modules */
const jwt = require('jsonwebtoken');
/* app modules */
const validator = require('../users/userValidate');

const _middleware = {}

_middleware.authenticating = (req, res, next) => {

  const token = req.header('Authorization') || ''
  const fingerprint = req.header('fingerprint') || ''

  if (!token) return res.status(400).json({error: "Token not provided"})
  try {
    const decoded = jwt.verify(token, 'socialhub' + fingerprint)
    if (decoded) {
      req.user = decoded
      next()
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

_middleware.validateJoinYCInput = (req, res, next) => {
  const { errors, isValid } = validator.validateJoinYC(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}

_middleware.validateRegisterInput = (req, res, next) => {  
  const { errors, isValid } = validator.validateRegisterInput(req.body);
  if (!isValid) return res.status(400).json({validateRegisterError: errors});
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
module.exports = _middleware;2