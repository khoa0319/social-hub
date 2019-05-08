import React, { Component } from "react";
import ActivityD from "./ActivityD";
class MainDashB extends Component {
  render() {
    console.log(this.props.match.path)
    return (
      <div>
        <ActivityD />
        <ActivityD />
        <ActivityD />
      </div>
    );
  }
}

export default MainDashB;
