/* 
 *
 * File Utilities 
 * 
 * 
*/

// Dependencies
const fs = require('fs');
const path = require('path');

// TODO write an append file helper
const lib = {};
lib.baseDir = path.join(__dirname, '../../data/');


// WRITE DATA TO A FILE
lib.create = function (dir, file, data, callback) {
	// Open file for writing
	fs.open(lib.baseDir + dir + '/' + file + '.json', 'wx', function (err, fd) {
		if (!err && fd) {
			// convert data to string
			let stringData = JSON.stringify(data);
			
			// Write to file and close it
			fs.writeFile(fd, stringData, function (err) {
				if (!err) {
					fs.close(fd, function (err) {
						if (!err) {
							callback(false, fd);
						} else {
							callback('Error closing new file');
						}
					})
				} else {
					callback('Error Writing new file');
				}
			})
		} else {
			callback('Error creating new file');
		}
	});
};

// Read data from a file
lib.read = function (dir, file, callback) {
	fs.readFile(lib.baseDir + dir + '/' + file + '.json', 'utf8', function (err, data) {
		// without specifying the encoding, return the buffer
		if (!err && data) {
			callback(false, data);
		} else {
			callback(err, data);
		}
	});
};

// update data inside a file
lib.update = function (dir, file, data, callback) {
	// Open file for writing
	fs.open(lib.baseDir + dir + '/' + file + '.json', 'r+', function (err, fd) {
		if (!err && fd) {
			let stringData = JSON.stringify(data);

			// passing fileDescriptor to the truncate is deprecated (disapproval)
			fs.truncate(lib.baseDir + dir + '/' + file + '.json', function (err) {
				if (!err) {
					fs.writeFile(fd, stringData, function (err) {
						if (!err) {
							fs.close(fd, function (err) {
								if (!err) {
									callback(false);
								} else {
									callback('Error closing file');
								}
							})
						} else {
							callback('Error writing to existing file');
						}
					})
				} else {
					callback('Error Truncating file');
				}
			})
		} else {
			callback("Error opening the file for updating, it may not exist yet!");
		}
	})
}

lib.delete = function (dir, file, callback) {
	// unlink the file
	fs.unlink(lib.baseDir + dir + '/' + file + '.json', function (err) {
		if (!err) {
			callback(false);
		} else {
			callback('Error unlinking the file');
		}
	})
}

// list all .json file in a directory
lib.list = function (dir, callback) {
	fs.readdir(lib.baseDir + dir + '/', function(err, files) {
		if (!err && files && files.length > 0) {
			let dataFiles = files.filter(item => item.indexOf('.json') > -1);
			callback(false, dataFiles)
		} else {
			callback(err, files);
		}
	})
};

lib.makeList = function (dir, file, callback) {
	lib.list(dir, function (err, data) {
		if (!err && data && data.length > 0) {
			let lstData = data.map(function (item) {
				return JSON.parse(fs.readFileSync(lib.baseDir + '/' + item, "utf8"));
			});
			console.log(lstData.length);
			callback(false, file, lstData);
		} else {
			callback(err, data);
		}
	})
}
module.exports = lib;


/* Note on file descriptor */
// 1. Any specified file descriptors has to support writing
// 2. If a file descriptor is specified as the file, it will not be closed automatically
// 3. The writing will begin at the beginning of the file. For example, if the file already had 'Hello world', and the newly written content
//		is 'Aloha', then the content of the file would be 'Aloha world', rather than just 'Aloha'