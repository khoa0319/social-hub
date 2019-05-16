import React, { Component } from 'react';

class Activity extends Component {
    render() {
        return (
            <div class="card">
            <div className="card-header">
        <h4 className="text-center mb-auto mt-auto">Danh Sách Các Hoạt Động Đã Tham Gia</h4>
        </div>
        <div className="row mb-auto mt-auto card-body">
          <div className="col-6 col-sm-4 input-group">
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
            <div class="input-group-append">
              <button
                className="btn btn-xs btn-myapp text-center"
                id="triggerId"
              >
                <i class="fas fa-search fa-xs" />
              </button>
            </div>
          </div>
          </div>
        <table class="table table-hover ml-auto mr-auto">
          <thead>
            <tr>
              <th>Stt</th>
              <th>Tên Hoạt Động</th>
              <th>Bắt Đầu/Kết Thúc</th>
              <th>Số Lượng Sinh Viên</th>
              <th>Chỉnh sửa</th>
              <th>Điểm Danh Sinh Viên</th>
              
            </tr>
          </thead>
          <tbody>
          <tr>
        <td>1</td>
        <td>Quẩy cùng các bạn ngày 20/11</td>
        <td>20/11/2019-21/11/2019</td>
        <td>0/50</td>
        <td>
          <button data-toggle="modal"
            data-target="#activityDetail" type="button" class="btn btn-sm btn-info">
            Chi Tiết
          </button>{" "}
          &nbsp;
          <button type="button" class="btn btn-sm btn-danger">
            X
          </button>
        </td>
        <td><button data-toggle="modal"
            data-target="#activityDetail" type="button" class="btn btn-block btn-info">
            Danh Sách
          </button>{""}</td>
      </tr>
          </tbody>
        </table>
      </div>
        );
    }
}

export default Activity;