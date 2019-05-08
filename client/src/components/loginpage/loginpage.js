import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
class loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      password: ""
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const { ID, password } = this.state;
    this.props.login({
      ID, password
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4 f-elm text-center ">
            <div className="card-header bg-main text-light align-middle">
              <h4> Đăng Nhập</h4>
              <p>Sinh viên đăng nhập vào bằng mã số sinh viên đã được cấp</p>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>

                <div className="form-group">
                  <h6>
                    <label>Tên Đăng Nhập</label>
                  </h6>
                  <input
                    type="text"
                    className="form-control"
                    name="ID"
                    id="ID"
                    placeholder="16DH123456"
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <h6>
                    <label>Mật Khẩu</label>{" "}
                  </h6>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                </div>

                <div className="mt-2 row">
                  <div className="mt-2 col-12 col-md-6" >
                    <button
                      type="button"
                      class="btn btn-default btn-block"
                    >
                      Quên Mật Khẩu ?
                    </button>
                  </div>
                  <div className="mt-2 col-12 col-md-6">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                    >
                      Đăng Nhập qua Facebook
                    </button>
                  </div>
                  <div className="mt-2 col-12 col-md-6">
                    {" "}
                    <Link className="btn btn-myapp btn-block" to="/activate">Kích hoạt tài khoản</Link>
                  </div>
                  <div className="mt-2 col-12 col-md-6">
                    <input
                      type="submit"
                      className="btn btn-myapp btn-block"
                      value="Đăng nhập"
                    />
                  </div>
                </div>
              </form>


            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="http://huflit.edu.vn/uploads/news/2016_10/14556502_1430786976934655_6410146407085835159_o.jpg"
            className="img-fluid rounded col-6 col-lg-12"
            alt="nothing"
          />
          <img
            src="http://huflit.edu.vn/uploads/news/2016_10/14556502_1430786976934655_6410146407085835159_o.jpg"
            className="img-fluid rounded mt-1 col-6 col-lg-12"
            alt="nothing"

          />
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(loginpage);
