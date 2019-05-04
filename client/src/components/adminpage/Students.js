import React, { Component } from "react";

class Students extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>16dh110224</td>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>Công Nghệ Thông Tin</td>
        <td>
          <button type="button" class="btn btn-md btn-info">
            Chi tiết
          </button>{" "}
          &nbsp;
          <button type="button" class="btn btn-md btn-warning">
            Sửa
          </button>{" "}
          &nbsp;
          <button type="button" class="btn btn-md btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default Students;
