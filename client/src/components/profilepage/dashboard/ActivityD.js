import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityDetail } from '../../../actions/activity';

class ActivityD extends Component {

  viewDetail = () => {
    this.props.setActivityDetail(this.props.activity)
  }
  render() {
    const { A_NAME } = this.props.activity;
    return (
      <div className="card mt-2">
        <div className="card-header">
          <h4>{A_NAME}</h4>
          <p>10 phút trước</p>
          <img src="https://wallstreetenglish.edu.vn/images/english-test/toeic/more-test-banner-vi.jpg" className="img-fluid" alt="englishtest" />
        </div>
        <div className="card-body d-flex justify-content-end">
          <button className="btn btn-myapp m-1" 
                  data-toggle="modal"
                  data-target="#activityDetail" onClick={this.viewDetail}>Xem Chi Tiết</button>
          <button className="btn btn-myapp2 m-1">Tham Gia</button>
        </div>
      </div>
    );
  }
}



export default connect(null, { setActivityDetail })(ActivityD);