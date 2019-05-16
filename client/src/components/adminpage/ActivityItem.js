import React, { Component } from 'react';
import { connect } from 'react-redux';
import {isAddNewActivity} from '../../action/adminauth/index'
class ActivityItem extends Component {
    render() {
        return (
            <tr>
        <td>{this.props.index+1}</td>
        <td>{this.props.activity.A_NAME}</td>
        <td>Từ {this.props.activity.STARTDATE} Đến {this.props.activity.ENDDATE}</td>
        <td>
          <button data-toggle="modal" onClick={this.props.isAddNewActivity(true)}
            data-target="#ActivityModel" type="button" class="btn btn-sm btn-info">
            Chi Tiết
          </button>
        </td>
        <td><button data-toggle="modal"
           class="btn btn-sm btn-block btn-info">
            Danh Sách
          </button>{""}</td>
      </tr>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
          isAddNewActivity: (value) => {
          dispatch(isAddNewActivity(value))
      }
  }
}

export default connect(null,mapDispatchToProps)(ActivityItem);