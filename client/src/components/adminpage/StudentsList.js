import React, { Component } from "react";
import Students from "./Students";
import {getStudentList} from "../../action/adminauth/index";
import { connect } from 'react-redux';
class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students:this.props.students
    };
  }
  componentDidMount(){
    if(localStorage.getItem("token")){
    this.props.getStudentList();
    console.log(this.props.students)
    }
  }
  render() {
    console.log(this.props.students)
    const studentsList=Array.from(this.props.students)
    const studentELM = studentsList.map((item, index) => {
      return <Students
        key={index} // key không phải props =
        item={item}
        index={index}
      />
    })
    return (
      <div className="mt-5">
        <h1 className="text-center mb-5">Danh Sách Các Sinh Viên</h1>
        <div className="row mb-3">
          <div className="col-6 col-sm-4 input-group">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
            <div className="input-group-append">
              <button
                className="btn btn-xs btn-myapp text-center"
                id="triggerId"
              >
                <i className="fas fa-search fa-xs" />
              </button>
            </div>
          </div>
          </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Stt</th>
              <th>MSSV</th>
              <th>Tên</th>
              <th>Lớp</th>
              <th>Khoa</th>
              <th>Ngành</th>
              <th>Chức Năng</th>
            </tr>
          </thead>
          <tbody>
            {studentELM}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    students: state.studentList
  }
}
export default connect(mapStateToProps,{getStudentList})(StudentList);
