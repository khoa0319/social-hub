import React, { Component } from 'react';

class ForgotPassword extends Component {
    render() {
        return (
            <div className="row">
            <div class="col-md-12">
                <div class="card mb-4 f-elm text-center ">
                     <div class="card-header bg-main text-light align-middle">
                       <h4>Quên mật khẩu ?</h4>
                     </div>
                     <div class="card-body">
                       <div class="form-group w-50 ml-auto mr-auto ">
                       <h6><label>Email</label></h6>
                         <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Username"/>
                         <div className="mt-2">
                         <button type="button" class="btn btn-myapp  col-12 col-md-12 col-lg-12">Lấy lại mật khẩu</button>
                         </div>
                     </div>
                   </div>
                  </div>
                  </div>
                  </div>
        );
    }
}

export default ForgotPassword;