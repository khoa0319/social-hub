import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import ActivityBtn from "../featurebutton/ActivityBtn";
import ShowingList from "../featurebutton/ShowingList";
import StudentsList from "./StudentsList";
import {getStudentList} from "../../action/adminauth/index";
import Activity from "./Activity";
import ActivityModel from '../model/ActivityDetail'
import StudentDetail from "../model/StudentDetail";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
class AdminD extends Component {
  render() {
    console.log(this.props.match.url)
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
        <Switch>

            <Route path={`${this.props.match.url}/activity`} exact component={Activity} />
            <Route path={`/`} component={StudentsList} />

          </Switch>
        </div>
        <ActivityModel/>
        <StudentDetail/>
      </div>
    );
  }
}
export default AdminD;
