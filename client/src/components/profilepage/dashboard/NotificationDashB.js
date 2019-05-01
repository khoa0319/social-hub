import React, { Component } from 'react';
import NotiD from './NotiD'
import NotiBtn from "../../featurebutton/NotiBtn";

class NotificationDashB extends Component {
    render() {
        return (
            <div className="card mt-2">
          <div className="card-header">
            <h4>THÔNG BÁO</h4>
          <NotiBtn/>
          </div>
          <div className="card-body d-flex justify-content-end">
          <row>
            <div className="col-12"><NotiD/></div>
            <div className="col-12"><NotiD/></div>
            <div className="col-12"><NotiD/></div>
            </row>
          </div>
        </div>
        );
    }
}

export default NotificationDashB;