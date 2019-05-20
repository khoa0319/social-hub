const _ = require('lodash');
const validator = require('validator');

const _validator = {};

_validator.validateJoinYC = (data) => {
  let errors = {};
  let { RACE, RELIGION, CMND, CMND_DATE, CMND_PLACE } = data;

  RACE = typeof(RACE) == 'string' && RACE.trim().length > 0 ? RACE.trim() : '';
  RELIGION = typeof(RELIGION) == 'string' && RELIGION.trim().length > 0 ? RELIGION.trim() : '';
  CMND = typeof(CMND) == 'string' && CMND.trim().length > 0 && CMND.trim().length < 18 ? CMND.trim() : '';
  CMND_PLACE = typeof(CMND_PLACE) == 'string' && CMND_PLACE.trim().length > 0 ? CMND_PLACE.trim() : '';  

  if (!validator.toDate(CMND_DATE)) errors.CMND_DATE = "CMND_Date is invalid";
  if (validator.isEmpty(RACE)) errors.RACE = "Race is required";
  if (validator.isEmpty(RELIGION)) errors.RELIGION = "Religion is required";
  if (validator.isEmpty(CMND)) errors.CMND = "CMND is required";
  if (validator.isEmpty(CMND_PLACE)) errors.CMND_PLACE = "CMND_Place is required";

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
  
  
  if (!validator.matches(BirthDate,/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/));
  if (!validator.isLength(ID,{min: 10, max: 10})) errors.ID = "MSSV không hợp lệ";
  if (!validator.isLength(FullName,{min: 1})) errors.FullName = "Họ Tên không hợp lệ";
  if (!validator.isLength(Faculty, {min: 8, max: 40})) errors.Faculty = "Khoa không hợp lệ";
  if (!validator.isLength(Major, {min: 11, max: 40})) errors.Major = "Ngành không hợp lệ";
  
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