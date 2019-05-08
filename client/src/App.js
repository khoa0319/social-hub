import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Loginpage from './components/loginpage/loginpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/profilepage/Profile';
import Activity from './components/model/Activity';
import Noti from './components/model/Noti';
import NoMatch from './components/profilepage/NoMatch';
import ActivePage from './components/loginpage/ActivePage';
import UpdateInfo from './components/loginpage/UpdateInfo';
import Adminloginpage from './components/loginpage/Adminloginpage'
class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <div className="container app-content mt-10">
          <Router>
            <Switch>
              <Route path="/" exact component={Loginpage} />
              <Route path="/adminlogin" exact component={Adminloginpage} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/activate" exact component={ActivePage} />
              <Route path="/updateInfo" exact component={UpdateInfo} />
              <Route path="/" component={NoMatch} />
            </Switch>
          </Router>
          <Activity />
          <Noti />
        </div>
      </div>
    );
  }
}

export default App;
