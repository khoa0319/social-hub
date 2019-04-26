import React, { Component } from 'react';

class NotiBtn extends Component {
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
        );
    }
}

export default NotiBtn;