const pool = require('./database');
const fData = require('../data/faculties.json');
const fmData = require('../data/faculty_major.json');
// table Faculty, major, class, student
const seedData = {};

seedData.seedFaculty = async (facultyData) => {
  // ip: faculty data
  // output: SocialHub.FACULTY
  // on STDOUT
  for (const key in facultyData) {
    if (facultyData.hasOwnProperty(key)) {
      const fItem = {FNAME: facultyData[key]};
      const result = await pool.query(`INSERT INTO FACULTY SET ?`, fItem);      
    }
  }
  seedData.seedMajor(fmData);
}

seedData.seedMajor = async (majorData) => {

  majorData.forEach(async item => {
    const result = await pool.query(`SELECT F_ID FROM FACULTY WHERE FNAME = ?`,`${item.khoa}`);
    item.nganh.forEach(async nganh => {
      let major = {
        MNAME: nganh,
        F_ID: result[0].F_ID
      }
      const info = await pool.query(`INSERT INTO MAJOR SET ?`, major);
      console.log(info);
    })
  })

}

seedData.seedClass = async (classData) => {

}


seedData.init = async () => {
  try {
    seedData.seedFaculty(fData);  
  } catch (error) {
    console.log(err);
  }
}
module.exports = seedData;