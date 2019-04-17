import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Loginpage from './components/loginpage/loginpage';
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter><div className="App">
      <Navbar/>
      <div className="container app-content">
      <Switch>
      <Route path="/" component={Loginpage}/>  
      </Switch>
      </div>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
