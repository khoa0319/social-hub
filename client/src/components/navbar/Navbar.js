import React, { Component } from "react";
import NavbarSmall from "./NavbarSmall";
import NavbarBig from "./NavbarBig";
import {Link} from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light fixed-top">
        
        <div className="container"> 
        <a className="navbar-brand mr-auto" href="/"><img
                src="img/logo.png"
                className="logo"
                alt="nothing"
              /></a>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
      <Link className="btn btn-none text-center" id="triggerId" to="./noti">
                <i className="far fa-bell" />
              </Link></li>
      <li className="nav-item">
      <Link className="btn btn-none text-center" id="triggerId" to="./">
                <i className="fas fa-tasks" />
              </Link>
      </li>
      <li className="nav-item">
      <Link className="btn btn-none text-center" id="triggerId" to="./information">
      <i className="fas fa-user mr-1"></i>
      username
                         </Link>
      </li>
    </ul>
   
    </div>
    
   
        {/* <div className="navbar-nav"> */}
          {/* <div className="row">
            <div className="col-2 col-sm-1 col-md-1">
              <button className="btn btn-none text-center" id="triggerId">
                <i className="far fa-bell" />
              </button>
            </div>
            <div className="col-2 col-sm-1 col-md-1">
              <button className="btn btn-none text-center" id="triggerId">
                <i className="fas fa-tasks" />
              </button>
            </div>
            <div className="col-6">
              <img
                src="img/logo.png"
                className="logo mx-auto"
                alt="nothing"
              />
            </div>
            <div className="col-3"> */}
              {/* <div className="input-group">
                <input
                  type="text"
                  className="form-control d-inline"
                  name=""
                  id="BigInput"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <button
                  className="btn btn-myapp text-center d-inline"
                  id="triggerId"
                >
                  <i className="fas fa-search" />
                </button>
              </div> */}
            {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </nav>
      </div>
    );
  }
}

export default Navbar;
