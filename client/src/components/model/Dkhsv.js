import React, { Component } from 'react';

class Dkhsinhvien extends Component {
    render() {
        return (
            <div
            class="modal fade"
            id="dkHSV"
            tabindex="-1"
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content text-center">
                <div class="modal-header">
                  <h5 class="modal-title ">Đăng Ký Vào Hội Sinh Viên</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div className="card">
                    <div className="card-header">Thông Tin Cơ Bản</div>
                      <div class="form-check m-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Đồng ý cung cấp thông tin cơ bản cho việc Đăng Ký Hội Sinh Viên
                        </label>
                      </div>
                    </div>
                    <div className="card">
                    <div className="card-header">Chuyển Sinh Hoạt Đoàn</div>
                      <div class="form-check m-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineCheckbox2"
                          value="radio1"
                          name="exampleRadios"
                          checked
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                          Đăng Ký Vào Hội Sinh Viên Trường
                        </label>
                      </div>
                      <div class="form-check m-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineCheckbox3"
                          value="radio2"
                          name="exampleRadios"
                        />
                        <label class="form-check-label" for="inlineCheckbox3">
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
                <div class="form-check m-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox8"
                          value="option5"
                        />
                        <label class="form-check-label" for="inlineCheckbox8">
                          Bạn đã đọc kỹ điều lệ tham gia hoạt động đoàn và đồng ý
                        </label>
                      </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-myapp"
                    
                  >
                    Đăng Ký
                  </button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
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