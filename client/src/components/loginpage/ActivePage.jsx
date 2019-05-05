import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class ActivePage extends Component {
  constructor(props) {
    super(props);
    this.Faculties = [
      "Khoa",
      "Du lịch - Khách sạn", 
      "Công nghệ thông tin", 
      "Kinh tế - Tài chính", 
      "Bộ môn Luật", 
      "Quản trị kinh doanh quốc tế",
      "Ngôn ngữ và Văn hóa phương Đông",
      "Quan hệ quốc tế",
      "Ngoại ngữ"]
    this.state = {
      ID: "",
      FullName: "",
      BirthDate: "",
      Faculty: "",
      Major: "",
      redirect: false
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/users/activate', this.state)
      .then(res => {
        console.log("TCL: ActivePage -> res", res)
        if (res.status === 200 && res.data.msg === 'SUCCESS') {
          this.setState({ redirect: true })
        }
      })
      .catch(error => console.log(error))
  }

  render() {
    const { redirect } = this.state;
    let facultyElements = this.Faculties.map(item => {
      return <option value={item}>{item}</option>
    })
    if (redirect) return <Redirect to='/updateInfo' />;
    return (      
      <div className="container app-content text-center">
        <div className="row form-vertical mt-10 ">
          <form onSubmit={this.onSubmit} className="ml-auto mr-auto mt-10">
            <div className="form-group">
              <label htmlFor="ID">Mã số Sinh Viên</label>
              <input onChange={this.onChange} type="text" className="form-control" name="ID" id="ID" aria-describedby="IDHelp" placeholder="mã số sinh viên" />
              <small id="IDHelp" className="form-text text-muted">Mã số sinh viên do trường cấp</small>
            </div>
            <div className="form-group">
              <label htmlFor="FullName">Họ Tên</label>
              <input onChange={this.onChange} type="text" className="form-control" name="FullName" id="FullName" placeholder="Họ Tên" />
            </div>
            <div className="form-group">
              <label htmlFor="BirthDate">Ngày Sinh</label>
              <input onChange={this.onChange} type="date" className="form-control" name="BirthDate" id="BirthDate" placeholder="Ngày Sinh" />
            </div>
            <div className="form-group">
              <label htmlFor="Faculty">Khoa</label>
              <select onChange={this.onChange} type="text" className="form-control" name="Faculty" id="Faculty">
                {facultyElements}
              </select>              
            </div>
            <div className="form-group">
              <label htmlFor="Major">Ngành</label>
              <input onChange={this.onChange} type="text" className="form-control" name="Major" id="Major" placeholder="Ngành" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>

    );
  }
}

export default ActivePage;