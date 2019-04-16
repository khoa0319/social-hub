const http = require('http');
const cheerio = require('cheerio');

module.exports = function getData(target, callback) {
	const formData = `------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"__EVENTTARGET\"\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"__EVENTARGUMENT\"\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"__VIEWSTATE\"\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ctl00$ContentPlaceHolder1$ctl00$txtMaSV\"\r\n\r\n${target}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"ctl00$ContentPlaceHolder1$ctl00$btnOK\"\r\n\r\nOK\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--`;
	const options = {
		"protocol": "http:",
		"hostname": 'daotao.huflit.edu.vn',
		"path": '/default.aspx?page=nhapmasv&flag=XemDiemThi',
		"method": "POST",
		"headers": {
			"content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
			"cache-control": "max-age=0",
		}
	}
	const req = http.request(options, function (res) {
		const { statusCode } = res;
		if (statusCode > 300 && statusCode < 400) {
			let cookie = res.headers['set-cookie'][0];
			options.headers.Cookie = cookie;
			options.path = res.headers.location;
			http.get(options, function (res) {
				if (res.statusCode === 200) {
					let rawData = '';
					res.setEncoding('utf8');
					res.on('data', chunk => rawData += chunk);
					res.on('end', () => {
						if (res.complete) {
							var $ = cheerio.load(rawData);
							let msv = $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblMaSinhVien').text();
							let stData = {
								maSV: msv,
								tenSV: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblTenSinhVien').text(),
								phai: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblPhai').text(),
								ngaySinh: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblNgaySinh').text(),
								noiSinh: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblNoiSinh').text(),
								lop: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblLop').text(),
								nganh: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lbNganh').text(),
								khoa: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblKhoa').text(),
								heDT: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblHeDaoTao').text(),
								khoaHoc: $('#ctl00_ContentPlaceHolder1_ctl00_ucThongTinSV_lblKhoaHoc').text()
							}
							callback(false, stData);
						}
					});
				} else {					
					callback(res.statusMessage, undefined);
				}
			})
		} else if (statusCode === 200) {
			callback("NOEXIST", target);
		} else {
			callback(statusCode);
		}
	});

	req.on('error', err => {
		callback(`problem with request: ${err.message}`, target);
	});
	req.on('timeout', () => {
		console.log('timeout');
	})
	req.write(formData);
	req.end();
}