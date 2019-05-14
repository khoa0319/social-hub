import React, { Component } from "react";
import ActivityD from "./ActivityD";
import { connect } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchActivities } from '../../../actions/activity';
// import setHeaders from '../../../utils/setHeaders';
// import axios from 'axios';
class MainDashB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.activities,
      hasMore: true,
      skip: 10,
      limit: 10,
    }
  }

  componentDidMount() {
    // const token = localStorage.getItem('token');
    // const fingerprint = localStorage.getItem('fingerprint')
    // if (token && fingerprint) {
    //   setHeaders(token, fingerprint);
    //   axios.get(`http://localhost:5000/api/activities/all`)
    //     .then(result => {
    //       this.setState({ activitiesCount: result.data.activities })
    //     })
    //     .catch(error => console.log(error))
    // }
    this.props.fetchActivities({ skip: 0, limit: 10 });
  }

  fetchMoreData = () => {
    if (this.props.activities.length >= this.state.activitiesCount) {
      return this.setState({ hasMore: false });
    }
    this.props.fetchActivities({ skip: this.state.skip, limit: 10 })
    this.setState({ skip: this.state.skip + 10, items: this.props.activities })

  }

  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          <h4>Hoạt Động</h4>

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
                <input type="text" className="form-control mr-1" id="formGroupExampleInput" placeholder="Tìm Kiếm" />

                <button type="submit" className="btn btn-primary my-1">
                  Tìm Kiếm
                  </button>
              </div>
            </form>

          </div>
        </div>

        <div className="card-body d-flex justify-content-end">
          <div className="row">
            <InfiniteScroll
              dataLength={this.props.activities.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {this.props.activities.map((item, index) => {
                return <div className="col-12" key={index}>
                  <ActivityD activity={item} key={index} />
                </div>
              })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activities: state.activities
  }
}

export default connect(mapStateToProps, { fetchActivities })(MainDashB);
