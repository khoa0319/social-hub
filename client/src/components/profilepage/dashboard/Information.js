import React, { Component } from 'react';

class Information extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-body">
            <form>
            <div>
            <div className="form-group">
            <label for="txtTenHoatDong">
            <h6>Tên Sinh Viên</h6>
                </label>
			<input name="txtTenHoatDong" className="form-control" id="Tên Sinh Viên" type="text" placeholder="Nhập tên hoạt động"/>
			</div>
            <div className="card mb-1">
            <div className="form-row m-1 card-body">
            <div className=" col-4">
            <label for="txtTenHoatDong">
            <h6>Khoa</h6>    
            </label>
            <input name="txtTenHoatDong" className="form-control" id="txtKhoa" type="text" value="Khoa" disabled/>
            </div>
            <div className=" col-4">
            <label for="txtTenHoatDong">
            <h6>Ngành</h6> 
            </label>
            <input name="txtTenHoatDong" className="form-control" id="txtNganh" type="text" value="Nganh" disabled/>            </div>
            <div className=" col-4">
            <label for="txtTenHoatDong">
             <h6>Lớp</h6> 
            </label>
            <input name="txtTenHoatDong" className="form-control" id="txtLop" type="text" value="Lop" disabled/>
            </div>
            </div>
            </div>
            
            <div className="form-group">
            <label for="txtTenHoatDong">
                    <h6>Nội Dung</h6>
                </label>
            <textarea placeholder="Nhập nội dung hoạt động"  className="form-control " rows="5" cols="35"/>
			</div>
            <div className="form-group">
            <label for="txtTenHoatDong">
                    <h6>Chi Phí</h6>
                </label>
            <input name="txtChiPhi" className="form-control" id="txtChiPhi" type="text" placeholder="Nhập chi phí"/>
			</div>
            <input className="btn btn-myapp3" name="btnGui" id="btnGui" type="button" value="Gửi"/>
			
            <input className="btn btn-myapp ml-1" name="btnHuy" id="btnHuy" type="button" value="Huỷ"/>

            </div>
            
            </form>
            </div>  
            </div>
        );
    }
}

export default Information;