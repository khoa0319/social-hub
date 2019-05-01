import React, { Component } from 'react';

class ChangePassword extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-body">
              <form>
                <div>
                  <div className="form-group">
                  <div className="form-row">
                  <div className="col-12">
                    <label for="txtTenHoatDong">
                      <h6>Mật khẩu</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id=""
                      type="password"
                      
                    />
                    </div>
                    <div className="col-12">
                    <label for="txtTenHoatDong">
                      <h6>Mật khẩu mới</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id=""
                      type="password"
                      
                    />
                    </div>
                    <div className="col-12">
                    <label for="txtTenHoatDong">
                      <h6>Nhập lại mật khẩu</h6>
                    </label>
                    <input
                      name="txtTenHoatDong"
                      className="form-control"
                      id=""
                      type="password"
                    />
                    </div>
                    </div>
                  </div>
                  <div className="text-center">
                  <input
                    className="btn btn-myapp mr-1"
                    name="btnHuy"
                    id="btnHuy"
                    type="button"
                    value="Đổi mật khẩu"
                  />
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

export default ChangePassword;