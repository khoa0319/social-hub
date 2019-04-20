import React, { Component } from 'react';
import ActivityD from './ActivityD'
import NotiD from './NotiD'
import SeachBtn from '../featurebutton/SearchBtn'

class SearchDashB extends Component {
    render() {
        return (
            <div className="card mt-2">
          <div className="card-header">
            <h3>#từ khóa tìm kiếm</h3>
            <SeachBtn/>
          </div>
          <ActivityD/>
          <NotiD/>
        </div>
        );
    }
}

export default SearchDashB;