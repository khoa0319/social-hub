import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Loginpage from './components/loginpage/loginpage';
import { Route, Switch,withRouter } from 'react-router-dom';
import Profile from './components/profilepage/Profile';
import Activity from './components/model/Activity';
import Noti from './components/model/Noti';
import NoMatch from './components/profilepage/NoMatch';
import ActivePage from './components/loginpage/ActivePage';
import Adminloginpage from './components/loginpage/Adminloginpage';
import AdminD from './components/adminpage/AdminD';
import UpdateInfo from './components/loginpage/UpdateInfo'
class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <div className="container app-content mt-10">
            <Switch>
              <Route path="/" exact component={Loginpage} />
              <Route path="/adminlogin" exact component={Adminloginpage} />
              <Route path="/activate" exact component={ActivePage} />
              <Route path="/updateInfo" exact component={UpdateInfo} />
              <Route path="/:user/" exact component={Profile} />} />
                {/* <Route path="/:user/profile/:sub" render={({match, history}) => <Profile match={match} />} /> */}
              <Route path="/active" exact component={ActivePage} />
              <Route path="/:admin/dashboard" exact component={AdminD}/>
               {/* <Route path={`/user2/profile/noti`} exact component={NotificationDashB}/> */}
              <Route path="/" component={NoMatch} />
            </Switch>

          <Activity />
          <Noti />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
