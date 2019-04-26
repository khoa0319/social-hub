import React, { Component } from "react";

class UpcomingAD extends Component {
  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          <h4>ENGLISH TEST</h4>
          <p>Sẽ diễn ra trong 2 ngày tới</p>
          <img
            src="https://wallstreetenglish.edu.vn/images/english-test/toeic/more-test-banner-vi.jpg"
            className="img-fluid"
            alt="englishtest"
          />
        </div>
        <div className="card-body d-flex justify-content-center">
          <button className="btn btn-myapp m-1">Xem Chi Tiết</button>
        </div>
      </div>
    );
  }
}

export default UpcomingAD;
