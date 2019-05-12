import React, { Component } from 'react';

class Dkhsinhvien extends Component {
    render() {
        return (
            <div
            className="modal fade"
            id="dkHSV"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content text-center">
                <div className="modal-header">
                  <h5 className="modal-title ">Đăng Ký Vào Hội Sinh Viên</h5>
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
                    <div className="card">
                    <div className="card-header">Thông Tin Cơ Bản</div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                          Đồng ý cung cấp thông tin cơ bản cho việc Đăng Ký Hội Sinh Viên
                        </label>
                      </div>
                    </div>
                    <div className="card">
                    <div className="card-header">Chuyển Sinh Hoạt Đoàn</div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineCheckbox2"
                          value="radio1"
                          name="exampleRadios"
                          checked
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                          Đăng Ký Vào Hội Sinh Viên Trường
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineCheckbox3"
                          value="radio2"
                          name="exampleRadios"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                          Đăng Ký Vào Hội Sinh Viên Khoa
                        </label> 
                      </div>
                    </div>
                    {/* <div className="card mt-2">
                    <div className="card-header">Thông Tin Nghị Quyết</div>
                      <div class="form-group row m-1">
                        <label for="inputEmail3" class="col-sm-12 col-form-label text-left">
                          Email
                        </label>
                        <div class="col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail3"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="form-group row m-1">
                        <label
                          for="inputPassword3"
                          class="col-sm-12 col-form-label text-left"
                        >
                          Password
                        </label>
                        <div class="col-sm-12">
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword3"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div> */}
                    
                  </form>
                </div>
                <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox8"
                          value="option5"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox8">
                          Bạn đã đọc kỹ điều lệ tham gia hoạt động đoàn và đồng ý
                        </label>
                      </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-myapp"
                    
                  >
                    Đăng Ký
                  </button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Hủy Bỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Dkhsinhvien;