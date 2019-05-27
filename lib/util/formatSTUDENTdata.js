/* 3rd party modules */
const bcrypt = require('bcrypt');
/* dependencies */
const pool = require('../../models/database');
const config = require('../../config/config');
// Container
const util = {};

util.getFormatData = (student) => {
  return new Promise((resolve, reject) => {
    let { maSV, tenSV, phai, ngaySinh, noiSinh, khoaHoc, nganh, khoa, lop } = student;
    lop = lop.replace("( )", "");
    /* {
      "maSV": "16DH110238",
      "tenSV": "Lê Thanh Tâm",
      "phai": "Nam",
      "ngaySinh": "18/02/98",
      "noiSinh": "Thành phố Hồ Chí Minh",
      "lop": "PM1603( )",
      "nganh": "Công nghệ thông tin",
      "khoa": "Công nghệ thông tin",
      "heDT": "Đại Học Chính Quy (QC43)",
      "khoaHoc": "2016-2020"
    } */
    let promisePwd = bcrypt.hash(config.defaultPassword, 10);
    let promiseFaculty = pool.query(`SELECT F_ID FROM FACULTY WHERE FNAME = ?`, khoa);
    let promiseMajor = pool.query(`SELECT M_ID FROM MAJOR WHERE MNAME = ?`, nganh);
    let promiseClass = pool.query(`SELECT C_ID FROM CLASS WHERE CNAME = ?`, lop);
    Promise.all([promiseFaculty, promiseMajor, promiseClass, promisePwd])
      .then(value => {
        const formattedData = {
          ID: maSV,
          FULLNAME: tenSV,
          GENDER: phai === 'Nam' ? 1 : 0,
          BIRTHDATE: util.getFormatDate(ngaySinh),
          ADDRESS: noiSinh,
          ACADEMIC_YEAR: khoaHoc,
          F_ID: value[0][0].F_ID,
          M_ID: value[1][0].M_ID,
          C_ID: value[2][0].C_ID,
          UT_ID: 7,
          HASHPASSWORD: value[3],
          PHONE: null,
          EMAIL: null,
          ISACTIVE: false,
          FACEBOOKID: null
        }
        resolve(formattedData);
      })
      .catch(err => reject(err))
  })
};
util.getFormatDate = (date) => {
  // IP: "19/03/96"
  // OP: "1996-03-19" 
  let dateComponent = date.split('/'); // 19,03,96
  let yearPrefix = dateComponent[2].startsWith('0') ? '20' : '19'
  return yearPrefix + dateComponent[2] + '-' + dateComponent[1] + '-' + dateComponent[0];
}

module.exports = util;