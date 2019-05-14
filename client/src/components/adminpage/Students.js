import React, { Component } from "react";

class Students extends Component {
  render() {
    const student=this.props.item
    return (
      <tr>
        <td>{this.props.index+1}</td>
        <td>{student.ID}</td>
        <td>{student.FULLNAME}</td>
        <td>{student.CNAME}</td>
        <td>{student.FNAME}</td>
        <td>{student.MNAME}</td>
        <td>
          <button type="button" class="btn btn-md btn-info">
            Chi tiết
          </button>{" "}
          &nbsp;
          <button type="button" class="btn btn-md btn-danger">
            Khôi Phục
          </button>
        </td>
      </tr>
    );
  }
}

export default Students;
