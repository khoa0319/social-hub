import React, { Component } from "react";

class ShowingList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 mb-1">
          <button className="btn btn-block btn-myapp " type="button">
            Danh Sách Sinh Viên
          </button>
        </div>
        <div className="col-4 mb-1">
          {" "}
          <button className="btn btn-block btn-myapp" type="button">
            Danh Sách Chuyển Sinh Hoạt Đoàn
          </button>
        </div>
        <div className="col-4 mb-1">
          <button className="btn btn-block btn-myapp" type="button">
            Danh Sách Đăng Ký Vào HSV
          </button>
        </div>
        <div className="col-4 mb-1">
          <button className="btn btn-block btn-myapp" type="button">
            Danh Sách Hoạt Động
          </button>
        </div>
        <div className="col-4 mb-1">
          {" "}
          <button className="btn btn-block btn-myapp" type="button">
            Danh Sách Thông Báo
          </button>
        </div>

        <div className="col-4 mb-1">
          {" "}
          <button className="btn btn-block btn-myapp" type="button">
            Danh Sách Thông Báo
          </button>
        </div>
      </div>
    );
  }
}

export default ShowingList;
