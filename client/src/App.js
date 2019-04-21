import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Loginpage from './components/loginpage/loginpage';
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import Profile from './components/profilepage/Profile';
import Activity from './components/model/Activity';
import Noti from './components/model/Noti';
import NoMatch from './components/profilepage/NoMatch';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <div className="container app-content mt-10">
      <Switch>
      <Route path="/" exact component={Loginpage}/>
      <Route path="/profile"  component={Profile}/> 
      <Route component={NoMatch}/> 
      </Switch>
      </div>
      </div>
      <Activity/>
      <Noti/>
      </BrowserRouter>
      
    );
  }
}

export default App;
