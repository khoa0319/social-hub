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
          <div>
            <div>
            <button
          className="btn btn-myapp2 btn-block px-auto"
          data-toggle="modal"
          data-target="#cSHD"
        >
          Chuyển Sinh Hoạt Đoàn
        </button>
                </div>
                <div className="mt-2">     
                <div>
        <button
          className="btn btn-myapp btn-block px-auto"
          data-toggle="modal"
          data-target="#dkHSV"
        >
          Đăng Ký Tham Gia Hội Sinh Viên
        </button>
       
      </div>
                </div>
                </div>
      </div>
      <div className="col-md-6">
      <Switch> 
      <Route path={`${this.props.match.path}`} exact component={MainDashB}/>
      <Route path={`${this.props.match.path}/noti`} exact component={NotificationDashB}/>
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
