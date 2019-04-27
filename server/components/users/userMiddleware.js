
/* app modules */
const validator = require('../users/userValidate');

const _middleware = {}

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
  const { errors, isValid } = validator.validateUpdateInput(req.body);
  if (!isValid) return res.status(400).json(errors);
  next();
}
module.exports = _middleware;