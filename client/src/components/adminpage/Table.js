import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div class="mt-5">
        <h1 className="text-center mb-5">Danh Sách Các Sinh Viên</h1>
        <div className="row mb-3">
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
        <table class="table table-hover">
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
              <button type="button" class="btn btn-md mt-1 btn-info">
                Thông tin chi tiết
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-md mt-1 btn-warning">
                Sửa
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-md mt-1 btn-danger">
                Xóa
              </button>
            </tr>
            <tr>
              <td>2</td>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
              <button type="button" class="btn btn-md mt-1 btn-info">
                Thông tin chi tiết
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-md mt-1 btn-warning">
                Sửa
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-md mt-1 btn-danger">
                Xóa
              </button>
            </tr>
            <tr>
              <td>3</td>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
              <button type="button" class="btn btn-md mt-1 btn-info">
                Thông tin chi tiết
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-md mt-1 btn-warning">
                Sửa
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-md mt-1 btn-danger">
                Xóa
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
