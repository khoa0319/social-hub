const pool = require('../../models/database');
const bcrypt = require('bcrypt');
class UserModel {
	constructor({ id, utId, fId, mId, cId, fullName }) {
		this._id = id;
		this._utId = utId;
		this._fId = fId;
		this._mId = mId;
		this._cId = cId;
		this._fbId = fbId;
		this.fullName = fullName;
		this.birthDate = birthDate;
		this.gender = gender;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.academicYear = academicYear;
		this._hashPassword = hashPassword;
		this._isActive = isActive;
	}

	static async generateInstance(id) {

		return new UserModel(id);
	}

	async comparePassword(password) {
		return await bcrypt.compare(password, this._hashPassword)
	}

	generatePayload() {
		return {

		}
	}



}

module.exports = UserModel.generateInstance;