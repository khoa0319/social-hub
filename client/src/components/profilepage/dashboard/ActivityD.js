import React, { Component } from 'react';

class ActivityD extends Component {
    render() {
        return (
            <div className="card mt-2">
          <div className="card-header">
          <h4>ENGLISH TEST</h4>
          <p>10 phút trước</p>
          <img src="https://wallstreetenglish.edu.vn/images/english-test/toeic/more-test-banner-vi.jpg" className="img-fluid" alt="englishtest" />
          </div>
          <div className="card-body d-flex justify-content-end">
            <button className="btn btn-myapp m-1" data-toggle="modal"
            data-target="#activityDetail">Xem Chi Tiết</button>
            <button className="btn btn-myapp2 m-1">Tham Gia</button>
          </div>
        </div>
        );
    }
}

export default ActivityD;