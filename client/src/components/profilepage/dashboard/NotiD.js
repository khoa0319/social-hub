import React, { Component } from 'react';

class NotiD extends Component {
    render() {
        return (
            <div className="card mt-2">
          <div className="card-header">
          <h4>Thông báo nghỉ học 30/4 và 1/5</h4>
          <p>10 phút trước</p>
          <img src="https://wallstreetenglish.edu.vn/images/english-test/toeic/more-test-banner-vi.jpg" className="img-fluid" alt="englishtest" />
          </div>
          <div className="card-body d-flex justify-content-end">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        );
    }
}

export default NotiD;