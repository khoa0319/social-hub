import React, { Component } from "react";

class Information extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form>
            <div>
              <div className="form-group">
              <div className="form-row">
              <div className="col-6">
                <label for="txtTenHoatDong">
                  <h6>Mã Số Sinh Viên</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder="MSSV"
                />
                </div>
                <div className="col-6">
                <label for="txtTenHoatDong">
                  <h6>Tên Sinh Viên</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder="Phạm Duy "
                />
                </div>
                <div className="col-6">
                <label for="txtTenHoatDong">
                  <h6>Tên Sinh Viên</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder="Phạm Duy "
                />
                </div>
                <div className="col-6">
                <label for="txtTenHoatDong">
                  <h6>Tên Sinh Viên</h6>
                </label>
                <input
                  name="txtTenHoatDong"
                  className="form-control"
                  id=""
                  type="text"
                  disabled
                  placeholder="Phạm Duy "
                />
                </div>
                </div>
              </div>
              <div className="card mb-1">
                <div className="form-row m-1 card-body">
                  <div className="col-6">
                    <label for="txtTenHoatDong">
                      <h6>Khoa</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtKhoa"
                      type="text"
                      value="Khoa"
                      disabled
                    />
                  </div>
                  <div className=" col-6">
                    <label for="txtTenHoatDong">
                      <h6>Ngành</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtNganh"
                      type="text"
                      value="Nganh"
                      disabled
                    />{" "}
                  </div>
                  <div className=" col-6">
                    <label for="txtTenHoatDong">
                      <h6>Lớp</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtLop"
                      type="text"
                      value="Lop"
                      disabled
                    />
                  </div>
                  <div className=" col-6">
                    <label for="txtTenHoatDong">
                      <h6>Khóa</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtLop"
                      type="text"
                      value="Khoa"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
              <input
                className="btn btn-myapp3"
                name="btnGui"
                id="btnGui"
                type="button"
                value="Gửi"
              />

              <input
                className="btn btn-myapp ml-1"
                name="btnHuy"
                id="btnHuy"
                type="button"
                value="Huỷ"
              />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Information;
