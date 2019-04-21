const pool = require('./database');
const fData = require('../data/faculties.json');
const fmData = require('../data/faculty_major.json');
const cmData = require('../data/class_major.json');
// table Faculty, major, class, student
const seedData = {};

seedData.seedFaculty = async (facultyData) => {
  // ip: faculty data
  // output: SocialHub.FACULTY
  // on STDOUT
  for (const key in facultyData) {
    if (facultyData.hasOwnProperty(key)) {
      const fItem = { FNAME: facultyData[key] };
      const result = await pool.query(`INSERT INTO FACULTY SET ?`, fItem);
    }
  }
}

seedData.seedMajor = async (majorData) => {
  majorData.forEach(async item => {
    const result = await pool.query(`SELECT F_ID FROM FACULTY WHERE FNAME = ?`, `${item.khoa}`);
    item.nganh.forEach(async nganh => {
      let major = {
        MNAME: nganh,
        F_ID: result[0].F_ID
      }
      const info = await pool.query(`INSERT INTO MAJOR SET ?`, major);      
    })
  })  
}

seedData.seedClass = async (classData) => {
  classData.forEach(async item => {    
    const result = await pool.query(`SELECT M_ID FROM MAJOR WHERE MNAME = ?`, item.nganh);    
    item.lop.forEach(async lop => {
      let stdClass = {
        C_NAME: lop,
        M_ID: result[0].M_ID
      }
      try {
        await pool.query(`INSERT INTO CLASS SET ?`, stdClass);
      } catch (error) {
        console.log("Err", error.message);
      }
      //console.log(info);
    })
    
  })
}


seedData.init = async () => {
  try {
    //await seedData.seedFaculty(fData);
    //await seedData.seedMajor(fmData);
    await seedData.seedClass(cmData);
  } catch (error) {
    console.err(error);
  }
}

seedData.init();
module.exports = seedData;