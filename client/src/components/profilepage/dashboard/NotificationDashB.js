import React, { Component } from 'react';
import NotiD from './NotiD'
import NotiBtn from "../../featurebutton/NotiBtn";

class NotificationDashB extends Component {
    render() {
        return (
            <div className="card mt-2">
          <div className="card-header">
            <h4>THÔNG BÁO</h4>
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
            <a class="dropdown-item" href="/">
              Khoa
            </a>
            <a class="dropdown-item" href="/">
              Đoàn
            </a>
            <a class="dropdown-item" href="/">
              Lớp
            </a>
          </div>
        </div>
        </div>
        <div className="ml-auto">
        </div>
      </div>
          </div>
          <div className="card-body d-flex justify-content-end">
          <row>
            <div className="col-12"><NotiD/></div>
            <div className="col-12"><NotiD/></div>
            <div className="col-12"><NotiD/></div>
            </row>
          </div>
        </div>
        );
    }
}

export default NotificationDashB;