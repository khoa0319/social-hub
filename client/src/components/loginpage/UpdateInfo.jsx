import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class UpdateInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      password2: "",
      email: "",
      phone: "",
      address: "",
      redirect: false,
      errors: {}
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  validateInput = (data) => {
    const { password, password2 } = data;
    let errors = {};
    if (password.trim().length < 8) errors.password = "Mât khẩu phải có ít nhất 8 kí tự";
    if (!(password.trim() === password2.trim())) errors.password2 = "Nhập lại mật khẩu không đúng";

    return {
      errors,
      valid: _.isEmpty(errors)
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const { errors, valid } = this.validateInput(this.state);
    if (valid) {
      const { password, email, address, phone } = this.state
      const id = this.props.id;
      axios.post('http://localhost:5000/api/users/updateInfo', {
        password, phone, email, address, id
      })
      .then(res => {
        if (res.status === 200 && res.data.msg === 'SUCCESS') {
          this.setState({
            errors: errors,
            redirect: true
          })          
        }
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      this.setState({ errors });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps);
    this.setState({ id: nextProps.id })
  }

  render() {
    const { errors, redirect } = this.state;
    if (redirect) return <Redirect to='/' />;
    return (
      <div className="card">
        <div className="card-body form-group">
          <h2 className="text-center">Cập nhật thông tin</h2>
          <form onSubmit={this.onSubmit}>
            <div>
              <div className="form-group">
                <div className="form-row">

                  <div className="col-12">
                    <label htmlFor="password">
                      <h6>Mật khẩu</h6>
                    </label>
                    <input
                      name="password"
                      className="form-control"
                      id=""
                      type="password"
                      onChange={this.onChange}
                      required
                    />
                    <small className="form-text text-danger">{errors.password ? "mật khẩu phải có ít nhất 8 kí tự" : ""}</small>
                  </div>

                  <div className="col-12">
                    <label htmlFor="password2">
                      <h6>Nhập lại mật khẩu</h6>
                    </label>
                    <input
                      name="password2"
                      className="form-control"
                      id=""
                      type="password"
                      onChange={this.onChange}
                      required
                    />
                    <small className="form-text text-danger">{errors.password2 ? "nhập lại mật khẩu không đúng" : ""}</small>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email">
                      <h6>Email</h6>
                    </label>
                    <input
                      name="email"
                      className="form-control"
                      id="email"
                      type="email"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="phone">
                      <h6>Phone</h6>
                    </label>
                    <input
                      name="phone"
                      className="form-control"
                      id=""
                      type="text"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="address">
                      <h6>Address</h6>
                    </label>
                    <input
                      name="address"
                      className="form-control"
                      id=""
                      type="text"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                </div>
              </div>
              <div className="text-center">
                <input
                  className="btn btn-myapp3"
                  name="btnGui"
                  id="btnGui"
                  type="submit"
                  value="Cập nhật thông tin"
                />

              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    id: state.id
  }
}

export default connect(mapStateToProps, null)(UpdateInfo);