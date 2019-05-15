import React, { Component } from "react";
import {connect} from 'react-redux';
import {getStudentDetail} from '../../action/adminauth/index';
import axios from 'axios';

class Students extends Component {
  getDetail=()=>
  {
    this.props.getStudentDetail(this.props.item)
  }
  resetStudent=()=>
  {
    axios
  .post('http://localhost:5000/api/admins/resetStudent',this.props.item)
    .then(res=>{
      if(res.data.msg==='SUCCESS'){
      console.log(res.data.msg)
      }
    })
    .catch(console.log)
  }
  render() {
    const student=this.props.item
    return (
      <tr key={this.props.index}>
        <td>{this.props.index+1}</td>
        <td>{student.ID}</td>
        <td>{student.FULLNAME}</td>
        <td>{student.CNAME}</td>
        <td>{student.FNAME}</td>
        <td>{student.MNAME}</td>
        <td>
          <button type="button" className="btn btn-md btn-info"  onClick={this.getDetail} data-toggle="modal"
                  data-target="#StudentDetail">
            Chi tiết
          </button>{" "}
          &nbsp;
          <button type="button" onClick={this.resetStudent} className="btn btn-md btn-danger">
            Khôi Phục
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(null,{getStudentDetail})(Students);
