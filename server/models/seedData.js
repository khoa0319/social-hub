const pool = require('./database');
const fData = require('../data/faculties.json');
const mData = require('../data/Majors.json');
const cData = require('../data/classes.json');
// table Faculty, major, class, student
const seedData = {};

seedData.seedFaculty = async (facultyData) => {
  // ip: faculty data
  // output: SocialHub.FACULTY
  // on STDOUT
  for (const key in facultyData) {
    if (facultyData.hasOwnProperty(key)) {
      const fItem = { FNAME: facultyData[key] };
      pool.query(`INSERT INTO FACULTY SET ?`, fItem)
        .then(result => {
          console.log(result);
        })
        .catch(console.log)
    }
  }
}

seedData.seedMajor = async (majorData) => {
  for (const key in majorData) {
    if (majorData.hasOwnProperty(key)) {
      const mItem = { MNAME: majorData[key] };
      pool.query(`INSERT INTO MAJOR SET ?`, mItem)
        .then(result => {
          console.log(result);
        })
        .catch(console.log)
    }
  }
}

seedData.seedClass = async (classData) => {
  for (const key in classData) {
    if (classData.hasOwnProperty(key)) {
      const cItem = { CNAME: classData[key] };
      pool.query(`INSERT INTO CLASS SET ?`, cItem)
        .then(result => {
          console.log(result);
        })
        .catch(console.log)
    }
  }
}

seedData.seedUserType = async () => {
  const arr = ['Đoàn Trường', 'HSV Trường', 'Đoàn Khoa', 'HSV Khoa', 'Bí Thư', 'Lớp Trường', 'Sinh Viên'];
  arr.forEach(item => {
    const roleItem = { ROLENAME: item };
    pool.query(`INSERT INTO USERTYPE SET ?`, roleItem)
      .then(result => {
        console.log(result);
      })
      .catch(console.log)
  })
}


seedData.init = async () => {
  seedData.seedFaculty(fData);
  seedData.seedMajor(mData);
  seedData.seedClass(cData);
  seedData.seedUserType();  
}

try {
  seedData.init();  
} catch (error) {
  console.error(error);
}

module.exports = seedData;