import React, { Component } from 'react';
import ActivityD from './ActivityD'
import NotiD from './NotiD'
import SeachBtn from '../../featurebutton/SearchBtn'

class SearchDashB extends Component {
    render() {
        const textSearch=this.props.match.params.name;
        return (
            <div className="card mt-2">
          <div className="card-header">
            <h3>{textSearch ? `#${textSearch}` :"Từ Khóa" }</h3>
            <SeachBtn/>
          </div>
          <div className="card-body">
          <ActivityD/>
          <NotiD/>
          </div>
        </div>
        );
    }
}

export default SearchDashB;