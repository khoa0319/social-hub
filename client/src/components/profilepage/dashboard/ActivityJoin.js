import React, { Component } from 'react';

class ActivityJoin extends Component {
    render() {
        return (
            
                <tr>
        <td>1</td>
        <td>Quẩy cùng các bạn ngày 20/11</td>
        <td>20/11/2019</td>
        <td>21/11/2019</td>
        <td>
          <button data-toggle="modal"
            data-target="#activityDetail" type="button" class="btn btn-sm btn-info">
            Thông Tin
          </button>{" "}
          &nbsp;
          <button type="button" class="btn btn-sm btn-danger">
            X
          </button>
        </td>
      </tr>
            
        );
    }
}

export default ActivityJoin;