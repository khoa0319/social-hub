import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div class="container">
            <h1>Danh Sách Các Người Dùng</h1>          
            <table class="table table-dark table-hover">
              <thead>
                <tr>
                  <th>STT</th>  
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <button type="button" class="btn btn-info">Thông tin chi tiết</button> &nbsp;
                  <button type="button" class="btn btn-warning">Sửa</button> &nbsp;
                  <button type="button" class="btn btn-danger">Xóa</button>
                </tr>
                <tr>
                    <td>2</td>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                  <button type="button" class="btn btn-info">Thông tin chi tiết</button> &nbsp;
                  <button type="button" class="btn btn-warning">Sửa</button> &nbsp;
                    <button type="button" class="btn btn-danger">Xóa</button>
                </tr>
                <tr>
                    <td>3</td>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                  <button type="button" class="btn btn-info">Thông tin chi tiết</button> &nbsp;
                  <button type="button" class="btn btn-warning">Sửa</button> &nbsp;
                    <button type="button" class="btn btn-danger">Xóa</button>
                </tr>
              </tbody>
            </table>
            <button type="button" class="btn btn-primary btn-block">Thêm Người Dùng</button>
          </div>        
        );
    }
}

export default Table;