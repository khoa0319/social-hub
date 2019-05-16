import React, { Component } from "react";

class ActivityBtn extends Component {
  render() {
    return (
      <div className="row">
<div className="col-6">
          <button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
          data-target="#ActivityModel"
          >
            Tạo Hoạt Động
          </button>
          </div>
          <div className="col-6"><button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
          >
            Tạo Thông Báo
          </button>
          </div>
          <div className="col-6 mt-2"><button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
          >
            Đổi mật khẩu
          </button>
          </div>
          <div className="col-6 mt-2"><button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
          >
            Tạo Tài Khoản Admin Mới
          </button>
          </div>
          
        </div>
    );
  }
}

export default ActivityBtn;