/* background workers */

// Dependencies
const pool = require('../../models/database');
const fileUtil = require('../../lib/util/WRXFile');
// Worker object

const worker = {};
function _setTimeout(fn, delay) {
  let maxDelay = Math.pow(2, 31) - 1;
  if (delay >  maxDelay) {
    let args = arguments;
    args[1] -= maxDelay;
    return setTimeout(() => {
      _setTimeout_.apply(undefined, args);
    }, maxDelay);
  }
  return setTimeout.apply(undefined, arguments);
}
worker.backupStudentLoop = () => {
  _setTimeout(worker._backupStudent, 1000 * 60 * 60 * 24 * 365);  
}

worker._backupStudent = () => {
  let year = new Date().getFullYear();
  pool.query(`CREATE TABLE IF NOT EXISTS BK_STUDENT_${year} (
    ID char(10) NOT NULL PRIMARY KEY,
      UT_ID tinyint unsigned NOT NULL,
      F_ID tinyint unsigned NOT NULL,
      M_ID tinyint unsigned NOT NULL,
      C_ID smallint unsigned NOT NULL,
      FULLNAME varchar(100) NOT NULL,
      BIRTHDATE date NOT NULL,
      GENDER bool NOT NULL,
      ADDRESS varchar(200),
      PHONE varchar(12),
      EMAIL varchar(100),
      ACADEMIC_YEAR char(9),
      HASHPASSWORD varchar(60),
      FOREIGN KEY (UT_ID) REFERENCES USERTYPE(UT_ID),
      FOREIGN KEY (F_ID) REFERENCES FACULTY(F_ID),
      FOREIGN KEY (M_ID) REFERENCES MAJOR(M_ID),
      FOREIGN KEY (C_ID) REFERENCES CLASS(C_ID)
  );`)
    .then(res => pool.query(`select * from STUDENT`))
    .then(result => {
      if(result.length > 0) {
        result.forEach(item => {
          pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query(`insert into BK_STUDENT_${year} SET ?`, item, (err, result, field) => {
              connection.release();
              if (err) throw err;
            });
          });
        });
      }
    })
    .catch(err => {
      fileUtil.create('log', `Error_${new Date()}`, err, (err, data) => {
        if (!err && data) {
          console.log("write log file at ", new Date());
        } else {
          console.log(err);
        }
      })
    })
}

worker.init = () => {
  worker.backupStudentLoop();
  console.log("worker is running");
}

worker.init();
module.exports = worker;