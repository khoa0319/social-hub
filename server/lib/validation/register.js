const _ = require('lodash');
const validator = require('validator');

const register = {};
register.validateInput = (data) => {
  let errors = {};

  let { ID, FullName, BirthDate, Faculty, Major } = data;

  ID = typeof (ID) == 'string' ? ID : '';
  FullName = typeof (FullName) == 'string' ? FullName.trim() : '';
  Faculty = typeof (Faculty) == 'string' ? Faculty.trim() : '';
  Major = typeof (Major) == 'string' ? Major.trim() : '';
  BirthDate = BirthDate || '';

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
register.validateInfo = (source, target) => {

}

module.exports = register;