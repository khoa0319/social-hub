const _ = require('lodash');
const validator = require('validator');

const _validator = {};

_validator.validateJoinYC = (data) => {
  let errors = {};
  
  return {
    errors,
    isValid: _.isEmpty(errors)
  }  
}

_validator.validateRegisterInput = (data) => {
  let errors = {};

  let { ID, FullName, BirthDate, Faculty, Major } = data;

  ID = typeof (ID) == 'string' ? ID : '';
  FullName = typeof (FullName) == 'string' ? FullName.trim() : '';
  Faculty = typeof (Faculty) == 'string' ? Faculty.trim() : '';
  Major = typeof (Major) == 'string' ? Major.trim() : '';
  
  if (!validator.toDate(BirthDate)) errors.BirthDate = "BirthDate is invalid";
  if (!validator.isLength(ID,{min: 10, max: 10})) errors.ID = "ID is invalid";
  if (!validator.isLength(FullName,{min: 2})) errors.FullName = "Name is invalid";
  if (!validator.isLength(Faculty, {min: 8, max: 40})) errors.Faculty = "Faculty is invalid";
  if (!validator.isLength(Major, {min: 11, max: 40})) errors.Major = "Major is invalid";
  
  if (validator.isEmpty(ID)) errors.ID = "ID is required";
  if (validator.isEmpty(FullName)) errors.FullName = "FullName is required";
  if (validator.isEmpty(Faculty)) errors.Faculty = "Faculty is required";
  if (validator.isEmpty(Major)) errors.Major = "Major is required";


  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}

_validator.validateInfo = (source, target) => {
  return _.isEqual(source, target);
}

_validator.validateUpdateInput = (data) => {
  let errors = {};

  let { address, phone, email } = data;

  // sanity checking
  address = typeof(address) == 'string' && address.trim().length > 0 ? address.trim() : "";
  phone = typeof(phone) == 'string' && phone.trim().length > 0 && phone.trim().length < 12 ? phone.trim() : "";
  email = typeof(email) == 'string' && email.trim().length > 0 ? email.trim() : "";

  if(!validator.isMobilePhone(phone)) errors.phone = "phone is invalid";
  if (!validator.isEmail(email)) errors.email = "email is invalid";
  if(validator.isEmpty(address)) errors.address = "address is empty"; 

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}

_validator.validateResetPassword = (data) => {
  let errors = {};
  let password = typeof(data) == 'string' && password.trim().length > 0 ? password.trim(): '';

  if (!validator.isLength(password, {min: 8})) errors.password = "Password must be at least 8 characters";
  if (validator.isEmpty(password)) errors.password = "Password is required";
  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
module.exports = _validator;