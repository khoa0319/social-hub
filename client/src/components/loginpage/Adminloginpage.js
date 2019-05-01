import React, { Component } from 'react';

class Adminloginpage extends Component {
    render() {
        return (
            <div className="row">
            <div class="col-md-12">
                <div class="card mb-4 f-elm text-center ">
                     <div class="card-header bg-main text-light align-middle">
                       <h4>Đăng Nhập vào trang Admin</h4>
                     </div>
                     <div class="card-body">
                       <div class="form-group">
                       <h6><label>Tên Đăng Nhập</label></h6>
                         <input type="" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Username"/>
                         <h6><label>Mật Khẩu</label> </h6>
                         <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Password"/>
                         <p>
                         <div className="mt-2">
                         <button type="button" class="btn btn-myapp  col-12 col-md-12 col-lg-12">Đăng Nhập</button>
                         </div>
                        </p>
                     </div>
                   </div>
                  </div>
                  </div>
                  </div>
        );
    }
}

export default Adminloginpage;