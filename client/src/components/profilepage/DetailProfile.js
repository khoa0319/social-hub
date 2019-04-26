import React, { Component } from 'react';
class DetailProfile extends Component {
    render() {
        return (
            <div className="card m-1 ">
            <div className="card-header bg-main txt-white text-center">
              <h4>Profile</h4>
               <img src="img/holder.jpg" className="img-fluid w-50 rounded-circle" alt="avatar" />
               <h6 className="mt-2">Phạm Duy</h6>
             
              </div>
              <div className="card-body">
              <p><strong>Mã Sinh Viên</strong>:16DH110224</p>
              <p><strong>Email</strong>: Duy@gmail.com</p>
              <p><strong>Ngày Sinh</strong>: 16/3/1999</p>
              </div>
              <div className="card-footer text-center ">
              <div>
                <button className="btn btn-secondary">Chỉnh Sửa Thông Tin</button>
                </div>
                <div>
                <button className="btn btn-myapp3 txt-white mt-2">Hoạt Động Của Bạn</button>
                </div>
                 </div>
            </div>
        );
    }
}

export default DetailProfile;