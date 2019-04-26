const pool = require('./database');
const formatHelper = require('../lib/util/formatSTUDENTdata');
const classOf16Data = require('../data/classOf16.json');
/* const fData = require('../data/faculties.json');
const mData = require('../data/Majors.json');
const cData = require('../data/classes.json'); */

// table Faculty, major, class, student, administrator, usertype
const seedData = {};

seedData.seedFaculty = (facultyData) => {
  // ip: faculty data
  // output: SocialHub.FACULTY
  // on STDOUT
  for (const key in facultyData) {
    if (facultyData.hasOwnProperty(key)) {
      const fItem = { FNAME: facultyData[key] };
      pool.query(`INSERT INTO FACULTY SET ?`, fItem)
        .then()
        .catch(console.log)
    }
  }
}

seedData.seedMajor = (majorData) => {
  for (const key in majorData) {
    if (majorData.hasOwnProperty(key)) {
      const mItem = { MNAME: majorData[key] };
      pool.query(`INSERT INTO MAJOR SET ?`, mItem)
        .then()
        .catch(console.log)
    }
  }
}

seedData.seedClass = (classData) => {
  for (const key in classData) {
    if (classData.hasOwnProperty(key)) {
      const cItem = { CNAME: classData[key] };
      pool.query(`INSERT INTO CLASS SET ?`, cItem)
        .then()
        .catch(console.log)
    }
  }
}

seedData.seedUserType = () => {
  const arr = ['Đoàn Trường', 'HSV Trường', 'Đoàn Khoa', 'HSV Khoa', 'Bí Thư', 'Lớp Trường', 'Sinh Viên'];
  arr.forEach(item => {
    const roleItem = { ROLENAME: item };
    pool.query(`INSERT INTO USERTYPE SET ?`, roleItem)
      .then()
      .catch(console.log)
  });
}

seedData.seedActivityType = () => {
  const arr = [
    { activity: 'Đoàn Trường', point: 1.5 },
    { activity: 'Đoàn Khoa', point: 1.5 },
    { activity: 'Hội Sinh Viên', point: 1.5 },
    { activity: 'Ngày Hội', point: 1.5 },
    { activity: 'Sinh Hoạt', point: 1.5 },
    { activity: 'Tình Nguyện', point: 1.5 },
    { activity: 'Hội Thảo', point: 1.5 }];
  arr.forEach(item => {
    const acItem = { AT_NAME: item.activity, AC_POINT: item.point };
    pool.query(`INSERT INTO ACTIVITY_TYPE SET ?`, acItem)
      .then()
      .catch(console.log)
  });
}

seedData.seedStudent = (data) => {
  data.forEach(std => {
    formatHelper.getFormatData(std)
      .then(formattedData => {
        pool.query(`INSERT INTO STUDENT SET ?`, formattedData)
          .then()
          .catch(console.error)
      })
      .catch(console.error)
  })

}


seedData.init = () => {
  /* seedData.seedFaculty(fData);
  seedData.seedMajor(mData);
  seedData.seedClass(cData);
  seedData.seedUserType();
  seedData.seedActivityType(); */
  seedData.seedStudent(classOf16Data);
}
seedData.init();
module.exports = seedData;