const data = require('../../data/data.json');
const fileUtil = require('../../lib/util/WRXFile');
const formatLib = require('../../lib/util/formatSTUDENTdata');
const fData = require('../../data/faculties.json');
let app = {};

app.getFaculty = (data) => {
  let arr = {};
  data.forEach(item => {
    let faculty = item.khoa;
    if (!arr[faculty]) arr[faculty] = faculty;
  });
  fileUtil.create('', 'faculties', arr, (err, data) => {
    if (!err && data) {
      console.log(data);
    } else {
      console.log(err);
    }
  })
}
app.getMajor = (data) => {
  let arr = {};
  data.forEach(item => {
    let faculty = item.nganh;
    if (!arr[faculty]) arr[faculty] = faculty;
  });
  fileUtil.create('', 'Majors', arr, (err, data) => {
    if (!err && data) {
      console.log(data);
    } else {
      console.log(err);
    }
  })
}
app.getClass = (data) => {
  let arr = {};
  data.forEach(item => {
    let faculty = item.lop;
    if (!arr[faculty]) arr[faculty] = faculty;
  });
  fileUtil.create('', 'Classes', arr, (err, data) => {
    if (!err && data) {
      console.log(data);
    } else {
      console.log(err);
    }
  })
}

app.getComposeData = (data,fdata) => {
  /* {
    "maSV": "17DH107683",
    "tenSV": "Nguyễn Thục Trinh",
    "phai": "Nữ",
    "ngaySinh": "20/10/99",
    "noiSinh": "Thành Phố Hồ Chí Minh",
    "lop": "KS1708( )",
    "nganh": "Quản trị khách sạn",
    "khoa": "Du lịch - Khách sạn",
    "heDT": "Đại Học Chính Quy (QC43)",
    "khoaHoc": "2017-2021"
  } */
  /* {
    khoa: "Du lịch - Khách sạn",
    nganh: ["Quản trị khách sạn","abc"]
  } */
  let arr = [];
  for (key in fdata) {
    arr.push(key);
  }
  let composeArr = [];
  arr.forEach(item => {
    let facultyMajor = {
      khoa: item,
      nganh: []
    }
    data.forEach(std => {
      if (std.khoa === item) {
        if (~facultyMajor.nganh.indexOf(std.nganh) === 0) facultyMajor.nganh.push(std.nganh);
      }
    })
    composeArr.push(facultyMajor);
  })
  fileUtil.create('','faculty_major', composeArr, (err, data) => {
    if (!err && data) {
      console.log(data);
    } else {
      console.log(err);
    }
  })
}
