import React, { Component } from "react";

class ActivityBtn extends Component {
  render() {
    return (
      <div className="d-flex">
      <div className="justify-content-start">
        <div class="dropdown">
          <button
            class="btn btn-myapp dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Khoa
            </a>
            <a class="dropdown-item" href="#">
              Đoàn
            </a>
            <a class="dropdown-item" href="#">
              Lớp
            </a>
          </div>
        </div>
        </div>
        <div className="ml-auto">

          <button
            class="btn btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
          data-target="#ActivityModel"
          >
            Tạo Hoạt Động
          </button>
          <button
            class="btn btn-myapp3 txt-white ml-2"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
          >
            Tạo Thông Báo
          </button>
        </div>
      </div>
    );
  }
}

export default ActivityBtn;
