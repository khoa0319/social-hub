import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      phone: "",
      email: ""
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { ID, FullName, Faculty, Major, Class, Academic_year, BirthDate } = this.props.auth.profile;
    return (
      <div className="card">
        <div className="card-body">
          <form>
            <div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-12">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Họ tên sinh viên</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id=""
                      type="text"
                      disabled
                      value={FullName}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Mã Số Sinh Viên</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id=""
                      type="text"
                      disabled
                      value={ID}
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Ngày Sinh</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id=""
                      type="text"
                      disabled
                      value={BirthDate}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="phone">
                      <h6>Điện Thoại</h6>
                    </label>
                    <input
                      name="phone"
                      className="form-control"
                      id=""
                      type="text"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="email">
                      <h6>Email</h6>
                    </label>
                    <input
                      name="email"
                      className="form-control"
                      id=""
                      type="text"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address">
                      <h6>Địa Chỉ</h6>
                    </label>
                    <input
                      name="address"
                      className="form-control"
                      id=""
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="card mb-1">
                <div className="form-row m-1 card-body">
                  <div className="col-6">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Khoa</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtKhoa"
                      type="text"
                      value={Faculty}
                      disabled
                    />
                  </div>
                  <div className=" col-6">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Ngành</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtNganh"
                      type="text"
                      value={Major}
                      disabled
                    />{" "}
                  </div>
                  <div className=" col-6">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Lớp</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtLop"
                      type="text"
                      value={Class}
                      disabled
                    />
                  </div>
                  <div className=" col-6">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Khóa</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtLop"
                      type="text"
                      value={Academic_year}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  className="btn btn-myapp mr-1"
                  name="btnHuy"
                  id="btnHuy"
                  type="button"
                  to="./changepassword"
                  replace
                >Đổi Mật Khẩu</Link>
                <input
                  className="btn btn-myapp3"
                  name="btnGui"
                  id="btnGui"
                  type="button"
                  value="Lưu lại thông tin"
                />


              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {})(Information);
