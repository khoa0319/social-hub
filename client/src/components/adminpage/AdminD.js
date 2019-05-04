import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import ActivityBtn from "../featurebutton/ActivityBtn";
import ShowingList from '../featurebutton/ShowingList'
import StudentsList from './StudentsList'
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
                <ShowingList/>
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

export default AdminD;
