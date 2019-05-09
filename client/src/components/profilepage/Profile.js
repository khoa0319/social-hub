import React, { Component } from "react";
import DetailProfile from './DetailProfile'
import MainDashB from "./dashboard/MainDashB";
import UpcomingAD from "./dashboard/UpcomingAD";
import BtnGroup from "../featurebutton/BtnGroup";
import {Route,Switch,withRouter} from 'react-router-dom';
import NotificationDashB from "./dashboard/NotificationDashB";
import SearchDashB from "./dashboard/SearchDashB";
import NoMatch from "./NoMatch";
import Information from "./dashboard/Information";
import ChangePassword from "./dashboard/ChangePassword";
import Activity from "../model/Activity";
import Cshdoan from "../model/Cshd";
import Dkhsinhvien from "../model/Dkhsv";
import ActivityJoinList from "./dashboard/ActivitysJoinList";
import ActivityJoin from "./dashboard/ActivityJoin";
import ActivityDetail from "../model/ActivityDetail";
class Profile extends Component {
  render() {
    console.log(this.props)
    const {match,history} = this.props;
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
          <DetailProfile match={match}/>
          <div>
          <button
          className="btn btn-myapp2 btn-block px-auto"
          data-toggle="modal"
          data-target="#cSHD"
        >
          Chuyển Sinh Hoạt Đoàn
        </button>
          </div>
          <div className="mt-1">
          <button
          className="btn btn-myapp btn-block px-auto"
          data-toggle="modal"
          data-target="#dkHSV"
        >
          Đăng Ký Tham Gia Hội Sinh Viên
        </button>
          </div>
      </div>
      <div className="col-md-8">
      <Switch> 
      
      <Route path={`${this.props.match.url}/noti`} exact component={NotificationDashB}/>
      <Route path={`${this.props.match.url}/search/:name`} exact render={({match, history}) => <SearchDashB match={match}  />} /> 
      <Route path={`${this.props.match.url}/information`} exact render={({match, history}) => <Information match={match} history={history}/>}/>
      <Route path={`${this.props.match.url}/changepassword`} exact component={ChangePassword}/>  
      <Route path={`${this.props.match.url}/activity`} exact component={ActivityJoinList}/>  
      <Route path={`${this.props.match.url}/youractivity`} exact component={ActivityJoinList}/>  
      <Route path={``} component={MainDashB}/>
      </Switch>   
      
      </div>
      
      <Cshdoan/>
      <Dkhsinhvien/>
      <ActivityDetail/>
      </div>
        
    );
  }
}

export default withRouter(Profile);
