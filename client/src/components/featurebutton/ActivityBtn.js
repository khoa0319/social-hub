import React, { Component } from "react";

class ActivityBtn extends Component {
  render() {
    return (
      <div className="row">
<div className="col-6">
          <button
            class="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
          data-target="#ActivityModel"
          >
            Tạo Hoạt Động
          </button>
          </div>
          <div className="col-6"><button
            class="btn btn-block btn-lg btn-myapp3 txt-white ml-2"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
          >
            Tạo Thông Báo
          </button></div>
          
        </div>
    );
  }
}

export default ActivityBtn;
