import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import ActivityBtn from "../featurebutton/ActivityBtn";
import ShowingList from "../featurebutton/ShowingList";
import StudentsList from "./StudentsList";
import {getStudentList} from "../../action/adminauth/index";
import ActivityJoinList from '../profilepage/dashboard/ActivitysJoinList';
import { connect } from 'react-redux';
import Activity from "./Activity";
class AdminD extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  
  // componentWillMount() {
  //   console.log("abcd")
  //   if (localStorage.getItem("token")) {
  //     Axios.get('http://localhost:5000/api/admins/studentlist')
  //     .then(res=>{
  //       console.log(res.data)
  //     })
  //   }
  // }

  // componentDidMount(){
  //   if(localStorage.getItem("token")){
  //   this.props.getStudentList();
  //   console.log(this.props.students)
  //   }
  // }
  render() {
    
    return (
      <div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <AdminProfile />
            </div>
            <div className="card-body">
              <ActivityBtn />
            </div>
            <div className="card-footer">
              <ShowingList />
            </div>
          </div>
        </div>
        <div className="col-12">
          <StudentsList/>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     students: state.studentList
//   }
// }
export default AdminD;
