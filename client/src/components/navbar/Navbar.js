import React, { Component } from "react";
import NavbarSmall from "./NavbarSmall";
import NavbarBig from "./NavbarBig";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light fixed-top">
        
        <div className="container"> 
        <a class="navbar-brand mr-auto  "><img
                src="img/logo.png"
                className="logo"
                alt="nothing"
              /></a>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item">
      <button className="btn btn-none text-center" id="triggerId">
                <i className="far fa-bell" />
              </button></li>
      <li class="nav-item">
      <button className="btn btn-none text-center" id="triggerId">
                <i className="fas fa-tasks" />
              </button>
      </li>
      <li class="nav-item">
      <button className="btn btn-none text-center" id="triggerId">
      <i class="fas fa-user"></i>
      username
                         </button>
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
