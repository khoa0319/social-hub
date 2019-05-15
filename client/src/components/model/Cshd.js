import React, { Component } from 'react';

class Cshdoan extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="cSHD"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h5 className="modal-title ">Chuyển sinh hoạt đoàn</h5>
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
                      Đồng ý cung cấp thông tin cơ bản cho việc Chuyển Sinh
                      Hoạt Đoàn
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
                      onChange={(event) => { event.target.name = event.target.value }}
                      checked
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                      Đăng Ký Vào Đoàn Trường
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
                      Đăng Ký Vào Đoàn Khoa
                        </label>
                  </div>
                </div>

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

export default Cshdoan;