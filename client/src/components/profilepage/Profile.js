import React, { Component } from "react";
import DetailProfile from './DetailProfile'
import MainDashB from "./dashboard/MainDashB";
import UpcomingAD from "./dashboard/UpcomingAD";
import BtnGroup from "../featurebutton/BtnGroup";
import {Route,Switch} from 'react-router-dom';
import NotificationDashB from "./dashboard/NotificationDashB";
import SearchDashB from "./dashboard/SearchDashB";
import NoMatch from "./NoMatch";
import Information from "./dashboard/Information";
import ChangePassword from "./dashboard/ChangePassword";
class Profile extends Component {
  render() {
    console.log(this.props.match.path);
    return (
      
      <div className="row">
      <div className="col-12">
      <img src="img/school.jpg"
      alt="none"
      className="img-fluid rounded mb-3 border"
      ></img>
      <hr></hr>
      </div>
      <div className="col-md-3  d-none d-sm-block">
          <DetailProfile/>
          <BtnGroup/>
      </div>
      <div className="col-md-6">
      <Switch> 
      <Route path={`${this.props.match.path}`} exact component={MainDashB}/>
      <Route path={`${this.props.match.path}/noti`} component={NotificationDashB}/>
      <Route path={`${this.props.match.path}/search/:name`} exact component={SearchDashB}/> 
      <Route path={`${this.props.match.path}/information`} exact component={Information}/>
      <Route path={`${this.props.match.path}/changepassword`} exact component={ChangePassword}/>  
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
