import React, { Component } from "react";

class Students extends Component {
  render() {
    const student=this.props.item
    return (
      <tr>
        <td>{this.props.index+1}</td>
        <td>{student.ID}</td>
        <td>{student.FULLNAME}</td>
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
