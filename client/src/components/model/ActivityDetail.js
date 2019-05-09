import React, { Component } from "react";

class ActivityDetail extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="activityDetail"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h5 className="modal-title ">Hoạt Động Englist Test</h5>
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
              <h6>20/11/2018-20/11/2019</h6>
              </div>
              <hr></hr>
              <div className="mt-2"> 
              <h4>Nội Dung</h4>
              <div className="px-5 text-overflow">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit velit pretium tortor dictum interdum. Aliquam in lacus nec elit vehicula rhoncus eget sit amet purus. Aliquam dui ligula, maximus at dui nec, auctor tincidunt turpis. Donec condimentum neque in ipsum congue placerat. Quisque et eros ipsum. Ut nec porttitor mi, a viverra enim. Nullam feugiat blandit dui sed dignissim. Fusce lacinia turpis sit amet diam mattis vulputate. Vestibulum eleifend imperdiet diam, eu posuere velit rutrum eget. Vestibulum ante nisl, malesuada et ligula vel, euismod sodales ligula. Donec eu accumsan dolor, sed consectetur orci. Suspendisse consectetur nisi lorem, eget pharetra sapien iaculis in. Nunc ornare lobortis ligula, fringilla fermentum libero congue eget. Nulla iaculis rhoncus est, eu venenatis sem dapibus vitae. Donec sit amet commodo ligula, a accumsan lectus.</p>
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
              <h4>Bên Tổ Chức Hoạt Động</h4>
              <h6>Khoa Công Nghệ Thông Tin</h6>
              </div>
            </div>
            <div className="modal-footer">
            <button className="btn btn-myapp2 m-1">Tham Gia</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                   Đóng
              </button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityDetail;
