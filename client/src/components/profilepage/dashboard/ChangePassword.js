import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
  
                    value="Đổi mật khẩu"
                  />
                  <Link
                className="btn btn-myapp3 text-white mr-1"
                name="btnHuy"
                id="btnHuy"
                to="./information"
                replace
              >Trang Thông Tin</Link>
    
                 
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default ChangePassword;