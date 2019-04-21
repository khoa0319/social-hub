import React, { Component } from "react";
import DetailProfile from './DetailProfile'
import ActivityD from "./dashboard/ActivityD";
import MainDashB from "./dashboard/MainDashB";
import UpcomingAD from "./dashboard/UpcomingAD";
import BtnGroup from "./featurebutton/BtnGroup";
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import NotiD from './dashboard/NotiD'
import NotificationDashB from "./dashboard/NotificationDashB";
import SearchDashB from "./dashboard/SearchDashB";
import NoMatch from "./NoMatch";
import ActivityBtn from "./featurebutton/ActivityBtn";
class Profile extends Component {
  render() {
    console.log(this.props.match.path);
    return (
      
      <div className="row">
      <div className="col-12">
      <img src="img/school.jpg"
      className="img-fluid rounded mb-3 border"
      ></img>
      <hr></hr>
      </div>
      <div className="col-md-3  d-none d-sm-block">
          <DetailProfile/>
          <BtnGroup/>
      </div>
      <div className="col-md-6">
      <ActivityBtn/>
      <Switch> 
      <Route path={`${this.props.match.path}`} exact component={ActivityD}/>
      <Route path={`${this.props.match.path}/noti`} component={NotificationDashB}/>
      <Route path={`${this.props.match.path}/search/:name`} exact component={SearchDashB}/> 
      <Route component={NoMatch}/>
      </Switch>   
      </div>
      <div className="col-md-3 d-none d-sm-block">
        <UpcomingAD/>
        <UpcomingAD/>
        <UpcomingAD/>
      </div>
      </div>
        
    );
  }
}

export default Profile;
