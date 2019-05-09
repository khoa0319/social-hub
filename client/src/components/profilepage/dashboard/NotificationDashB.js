import React, { Component } from 'react';
import NotiD from './NotiD'
import NotiBtn from "../../featurebutton/NotiBtn";

class NotificationDashB extends Component {
    render() {
        return (
            <div className="card mt-2">
          <div className="card-header">
            <h4>THÔNG BÁO</h4>
            <div className="justify-content-start">
                <form className="form-inline">
                <div className="form-group form-inline">
                  <select
                    className="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                  >
                    <option >Tất Cả</option>
                    <option value="1">Khoa</option>
                    <option value="2">Ngành</option>
                    <option value="3">Lớp</option>
                  </select>
                  </div>
                  <div className="form-group ml-auto">
                  <input type="text" className="form-control mr-1" id="formGroupExampleInput" placeholder="Tìm Kiếm"/>

                  <button type="submit" className="btn btn-primary my-1">
                    Tìm Kiếm
                  </button>
                  </div>
                </form>
                
              </div>
      
      
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