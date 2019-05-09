import React, { Component } from 'react';
import ActivityJoin from './ActivityJoin'
class ActivityJoinList extends Component {
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
              <th>Bắt Đầu</th>
              <th>Kết Thúc</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
          <ActivityJoin/>
          </tbody>
        </table>
      </div>
        );
    }
}

export default ActivityJoinList;