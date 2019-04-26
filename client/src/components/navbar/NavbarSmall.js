import React, { Component } from "react";

class NavbarSmall extends Component {
  render() {
    return (
      <div className="row nav-stuff justify-content-md-center">
      <div className="col-6 col-sm-4 input-group">

  <input type="text"
    class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
     <div class="input-group-append">

    <button className="btn btn-xs btn-myapp text-center" id="triggerId">
           <i class="fas fa-search fa-xs"></i>
          </button>
</div>
        </div>
     
      <div className="col-2 col-sm-4">
        <button
          className="btn btn-none text-center"
          id="triggerId"
        >
          <i className="far fa-bell" />
        </button>
        </div>
     
 <div className="col-2 col-sm-4">
        <button
          className="btn btn-none text-center"
          id="triggerId"
        >
          <i class="fas fa-tasks"></i>
          </button>
        </div>
        <div className="col-2 col-sm-4">
        <button
          className="btn btn-none text-center"
          id="triggerId"
        >
          <img src="https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j__400x400.jpg" className="rounded-circle" alt="nothing"></img>
        </button>
        </div>
        
      </div>
    );
  }
}

export default NavbarSmall;
