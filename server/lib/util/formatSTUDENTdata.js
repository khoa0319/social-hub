const fs = require('fs');
const data = require('../../data/data.json');
module.exports = {
  getFormatData: (student) => {
    const { maSV, tenSV, phai, ngaySinh, noiSinh, khoaHoc } = student;
    const formatted = {
      ID: maSV,
      FULLNAME: tenSV,
      GENDER: phai === 'Nam' ? 1 : 0,
      BIRTHDAY: this.getFormatDate(ngaySinh),
      ADDRESS: noiSinh,
      ACADEMIC_YEAR: khoaHoc      
    }
  },
  getFormatDate: (date) => {
    // IP: "19/03/96"
    // OP: "1996-03-19" 
    let dateComponent = date.split('/'); // 19,03,96
    let yearPrefix = dateComponent[2].startsWith('0') ? '20' : '19'
    return yearPrefix + dateComponent[2] + '-' + dateComponent[1] + '-' + dateComponent[0];
  }
}
