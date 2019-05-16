import React, { Component } from "react";

class Noti extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="NotiModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="NotiModel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-header text-center">
              <h5 className="modal-title ">Gửi Thông Báo</h5>
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
                    <label htmlFor="txtTenHoatDong">
                      <h6>Tên Hoạt Động</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id="txtTenHoatDong"
                      type="text"
                      placeholder="Nhập tên hoạt động"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtTenHoatDong">
                      <h6>Nội Dung</h6>
                    </label>
                    <textarea
                      placeholder="Nhập nội dung hoạt động"
                      className="form-control "
                      rows="5"
                      cols="35"
                    />
                  </div>
                  <div className="card mb-1">
                    <div className="form-row m-1 card-body">
                      <div className=" col-4">
                        <label htmlFor="txtTenHoatDong">
                          <h6>Khoa</h6>
                        </label>
                        <select id="inputState" className="form-control">
                          <option>All</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className=" col-4">
                        <label htmlFor="txtTenHoatDong">
                          <h6>Ngành</h6>
                        </label>
                        <select id="inputState" className="form-control">
                          <option>All</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className=" col-4">
                        <label htmlFor="txtTenHoatDong">
                          <h6>Lớp</h6>
                        </label>
                        <select id="inputState" className="form-control">
                          <option>All</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-myapp"
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      Gửi đến sinh viên
                    </button>
                    <div id="demo" className="collapse card mt-1">
                      <div className="card-header text-center">
                      
                        <input type="text" className="form-control" id="MSSV" placeholder="MSSV muốn gửi TB"/>
                        <button type="submit" className="btn btn-primary ml-2">Thêm Vào Danh Sách</button>
                      </div>
                      <div className="card-body">
                          
                      </div>
                    </div>
                  </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Noti;
