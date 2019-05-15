import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import ActivityBtn from "../featurebutton/ActivityBtn";
import ShowingList from "../featurebutton/ShowingList";
import StudentsList from "./StudentsList";
import {getStudentList} from "../../action/adminauth/index";
import ActivityJoinList from '../profilepage/dashboard/ActivitysJoinList';
import { connect } from 'react-redux';
import Activity from "./Activity";
import ActivityModel from '../model/ActivityDetail'
import StudentDetail from "../model/StudentDetail";
class AdminD extends Component {
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
        <ActivityModel/>
        <StudentDetail/>
      </div>
    );
  }
}
export default AdminD;
