import React, { Component } from "react";

class loginpage extends Component {
  render() {
    return (
      <div className="row">
        <div class="col-md-8">
          <div class="card mb-4 f-elm text-center ">
            <div class="card-header bg-main text-light align-middle">
              <h4> Đăng Nhập</h4>
              <p>Sinh viên đăng nhập vào bằng mã số sinh viên đã được cấp</p>
            </div>
            <div class="card-body">
              <div class="form-group">
                <h6>
                  <label>Tên Đăng Nhập</label>
                </h6>
                <input
                  type=""
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder="Username"
                />
                <h6>
                  <label>Mật Khẩu</label>{" "}
                </h6>
                <input
                  type="email"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder="Password"
                />
                <div className="mt-2 row">
                  <div className="mt-2 col-12 col-md-6" >
                    <button
                      type="button"
                      class="btn btn-default btn-block"
                    >
                      Quên Mật Khẩu ?
                    </button>
                  </div>
                  <div className="mt-2 col-12 col-md-6">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                    >
                      Đăng Nhập qua Facebook
                    </button>
                  </div>
                  <div className="mt-2 col-12 col-md-6">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-myapp btn-block"
                    >
                      Kích hoạt tài khoản
                    </button>
                  </div>
                  <div className="mt-2 col-12 col-md-6">
                    <button
                      type="button"
                      class="btn btn-myapp btn-block"
                    >
                      Đăng Nhập
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="http://huflit.edu.vn/uploads/news/2016_10/14556502_1430786976934655_6410146407085835159_o.jpg"
            className="img-fluid rounded col-6 col-lg-12"
          />
          <img
            src="http://huflit.edu.vn/uploads/news/2016_10/14556502_1430786976934655_6410146407085835159_o.jpg"
            className="img-fluid rounded mt-1 col-6 col-lg-12"
          />
        </div>
      </div>
    );
  }
}

export default loginpage;
