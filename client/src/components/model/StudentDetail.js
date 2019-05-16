import React, { Component } from 'react';
import { connect } from 'react-redux';
class StudentDetail extends Component {
    render() {
      const { FULLNAME,ID, PHONE, EMAIL, ADDRESS,BIRTHDATE,MNAME,CNAME,FNAME,ACADEMIC_YEAR} = this.props.StudentDetail;

        return (
            <div
            className="modal fade"
            id="StudentDetail"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content text-center">
                <div className="modal-header">
                  <h5 className="modal-title ">Thông Tin Sinh Viên</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                <form>
            <div>
              <div className="form-group">
              <div className="form-row">
              <div className="col-12">
                <label htmlFor="txtTenHoatDong">
                  <h6>Họ Tên Sinh Viên</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder={FULLNAME}
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
                  placeholder={ID}
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
                  placeholder={BIRTHDATE}
                />
                </div>
                <div className="col-6">
                <label htmlFor="txtTenHoatDong">
                  <h6>Điện Thoại</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder={PHONE}
                />
                </div>
                <div className="col-6">
                <label htmlFor="txtTenHoatDong">
                  <h6>Email</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder={EMAIL}
                />
                </div>
                <div className="col-12">
                <label htmlFor="txtTenHoatDong">
                  <h6>Địa Chỉ</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder={ADDRESS}
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
                      placeholder={FNAME}
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
                      placeholder={MNAME}
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
                      placeholder={CNAME}
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
                      placeholder={ACADEMIC_YEAR}
                      disabled
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </form>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    StudentDetail: state.studentDetail
  }
}

export default connect(mapStateToProps)(StudentDetail);