import React, { Component } from "react";
import { connect } from 'react-redux';
class ActivityDetail extends Component {
  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  render() {
    const { A_NAME, CONTENT, STARTDATE, ENDDATE, AT_NAME,AC_POINT } = this.props.activity;
    return (
      <div
        className="modal fade"
        id="activityDetail"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h5 className="modal-title ">{A_NAME}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="model-body">
              <div className="mt-2">
                <h4>Thời Gian Diễn Ra</h4>
                <h6>{STARTDATE}:{ENDDATE}</h6>
              </div>
              <hr></hr>
              <div className="mt-2">
                <h4>Nội Dung</h4>
                <div className="px-5 text-overflow">
                  <p>{CONTENT}</p>
                </div>
              </div>
              <hr></hr>
              <img
                src="http://huflit.edu.vn/uploads/news/2016_10/14556502_1430786976934655_6410146407085835159_o.jpg"
                className="img-fluid rounded w-75 mt-2"
                alt="nothing"
              />
              <hr></hr>
              <div className="mt-2">
                <h4>Loại Hoạt Động</h4>
                <h6>{AT_NAME}</h6>
                <h6>Điểm rèn luyện: {AC_POINT}</h6>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-myapp2 m-1">Tham Gia</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps, {})(ActivityDetail);
