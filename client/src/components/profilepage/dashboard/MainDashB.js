import React, { Component } from "react";
import ActivityD from "./ActivityD";
import ActivityBtn from "../featurebutton/ActivityBtn";
class MainDashB extends Component {
  render() {
    return (
      <div>
        <ActivityBtn/>
        <ActivityD />
        <ActivityD />
        <ActivityD />
      </div>
    );
  }
}

export default MainDashB;
