const request = require('../../lib/util/requestID.js');
let d1 = new Date();
request('16DH110210', (err, data) => {
  if (!err && data) {
    console.log(data);
    let d2 = new Date();
    console.log((d2 - d1)*1000/1000000);
  }
})