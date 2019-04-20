const pool = require('./database');

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
      console.log(result);
    }
  }
}

seedData.seedMajor = async (majorData) => {
  
}

seedData.seedClass = async (classData) => {

}


seedData.init = async (data) => {
  try {
    seedData.seedFaculty(data);
  } catch (error) {
    console.log(err);
  }
}
module.exports = seedData;