import React, { Component } from "react";
import {Link} from "react-router-dom"
class NavbarBig extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2 col-sm-1 col-md-1">
          <button className="btn btn-none text-center" id="triggerId">
            <i className="far fa-bell" />
          </button>
        </div>
        <div className="col-2 col-sm-1 col-md-1">
          <button className="btn btn-none text-center" id="triggerId">
          <i className="fas fa-tasks"></i>
          </button>
        </div>
        <div className="col-7">
          <img
            src="img/logo.png"
            className="logo d-flex justify-content-center mx-auto d-block"
            alt="nothing"
          />
        </div>
        <div className="col-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control d-inline"
            name=""
            id="BigInput"
            aria-describedby="helpId"
            placeholder=""
          />
           <button className="btn btn-myapp text-center d-inline" id="triggerId">
           <i className="fas fa-search"></i>
          </button>
          </div>
        </div>

        {/* <div className="col-1 col-sm-1 col-md-1">
         
        </div> */}
      </div>
    );
  }
}

export default NavbarBig;
