const _ = require('lodash');
const validator = require('validator');
const _validator = {};

_validator.validateRegisterInput = (data) => {
    let errors = {};
 
    let {username, password,password2, fullname, email,phone} = data;
    console.log(data)
    console.log(username)
    username = typeof (username) == 'string' ? username : '';
    password = typeof (password) == 'string' ? password : '';
    password2= password2===password ? password2 :'';
    fullname = typeof (fullname) == 'string' ? fullname.trim() : '';
    email = typeof (email) == 'string' ? email.trim() : '';
    phone = typeof (phone) == 'string' ? phone.trim() : '';
    console.log(phone)
    if (!validator.isLength(username,{min: 10, max: 20})) errors.username = "Username is invalid";
    if (!validator.isLength(fullname,{min: 2})) errors.fullname = "Name is invalid";
    if (!validator.isLength(email, {min: 8, max: 40})) errors.email = "Email is invalid";
    if (!validator.isLength(phone, {min: 10, max: 11})) errors.phone = "Phone is invalid";
    if (!validator.isLength(password, {min: 8, max: 40})) errors.password = "Password is invalid";

    if (validator.isEmpty(username)) errors.username = "User Name is required";
    if (validator.isEmpty(fullname)) errors.fullname = "Full Name is required";
    if (validator.isEmpty(email)) errors.email = "Email is required";
    if (validator.isEmpty(phone)) errors.phone = "Phone is required";
    if (validator.isEmpty(password)) errors.password = "Password is required";
    if (validator.isEmpty(password2)) errors.password2 = "Retype Password is required";
    
  
    return {
      errors,
      isValid: _.isEmpty(errors)
    }
  }
  module.exports = _validator;