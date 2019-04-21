import React, { Component } from "react";

class ActivityBtn extends Component {
  render() {
    return (
      <div className="d-flex mb-1">
      <div className="justify-content-start">
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
