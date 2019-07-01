/* background workers */

// Dependencies
const pool = require('../../models/database');
// Worker object

const worker = {};
function _setTimeout(fn, delay) {
	let maxDelay = Math.pow(2, 31) - 1;
	if (delay > maxDelay) {
		let args = arguments;
		args[1] -= maxDelay;
		return setTimeout(() => {
			_setTimeout_.apply(undefined, args);
		}, maxDelay);
	}
	return setTimeout.apply(undefined, arguments);
}
worker.backupStudentLoop = () => {
	_setTimeout(worker._CreateBackupStudentTable, 1000 * 60 * 60 * 24 * 365);
}

worker.backupActiveStudent = (year) => {
	pool.query(`SELECT * FROM STUDENT WHERE ISACTIVE = true`)
		.then(result => {
			result.forEach(std => {
				pool.query(`Insert INTO BK_STUDENT_${year} SET ?`, std)
					.then(result => {
						console.log(`BACKUP ${std.ID}`);
					})
					.catch(err => {
						console.log(`Error BACKUP ${std.ID}`, err);
					})
			})
		})
		.catch(error => {
			console.log('Error Backup Student');
		})
}

worker._CreateBackupStudentTable = () => {
	let year = new Date().getFullYear();
	pool.query(`CREATE TABLE IF NOT EXISTS BK_STUDENT_${year} (
    ID char(10) NOT NULL PRIMARY KEY,
    UT_ID tinyint unsigned NOT NULL,
    F_ID tinyint unsigned NOT NULL,
    M_ID tinyint unsigned NOT NULL,
    C_ID smallint unsigned NOT NULL,
    FACEBOOKID varchar(20),
    FULLNAME varchar(100) NOT NULL,
    BIRTHDATE date NOT NULL,
    GENDER bool NOT NULL,
    ADDRESS varchar(200),
    PHONE varchar(12),
    EMAIL varchar(100),
    ACADEMIC_YEAR char(9),
    HASHPASSWORD varchar(60),
    ISACTIVE BOOLEAN,
    FOREIGN KEY (UT_ID) REFERENCES USERTYPE(UT_ID),
    FOREIGN KEY (F_ID) REFERENCES FACULTY(F_ID),
    FOREIGN KEY (M_ID) REFERENCES MAJOR(M_ID),
    FOREIGN KEY (C_ID) REFERENCES CLASS(C_ID)
  );`)
		.then(res => {
			console.log(`Create BACKUP BK_STUDENT_${year}`)
			worker.backupActiveStudent(year);
		})
		.catch(err => {
			console.log('Error Creating Table', err)
			console.log("Try Running Backup Again in 1 day");
			_setTimeout(worker._CreateBackupStudentTable, 1000 * 60 * 60 * 24);
		})
}

worker.init = () => {
	pool.getConnection((err, connection) => {
		
		worker._CreateBackupStudentTable()
		worker.backupStudentLoop();
		console.log("worker is running");
	})

}

module.exports = worker;