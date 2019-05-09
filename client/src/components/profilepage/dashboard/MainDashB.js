import React, { Component } from "react";
import ActivityD from "./ActivityD";
class MainDashB extends Component {
  render() {
    console.log(this.props.match.path)
    return (
      <div className="card mt-2">
      <div className="card-header">
        <h4>Hoạt Động</h4>
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
        <div className="col-12"><ActivityD/></div>
        <div className="col-12"><ActivityD/></div>
        <div className="col-12"><ActivityD/></div>
        </row>
      </div>
    </div>
      
    );
  }
}

export default MainDashB;
