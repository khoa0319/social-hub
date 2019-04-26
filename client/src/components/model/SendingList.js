import React, { Component } from "react";

class SendingList extends Component {
  render() {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>MSSV</th>
              <th>Tên Sinh Viên</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SendingList;
