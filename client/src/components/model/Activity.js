import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
class Activity extends Component {
    render() {
        return (
            <div
            className="modal fade"
            id="ActivityModel"
            tabindex="-1"
            role="dialog"
            aria-labelledby="ActivityModel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content text-center">
            <div className="modal-header text-center">
            <h5 className="modal-title ">Tạo Hoạt Động</h5>
            <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>  
            </div>
            <div className="modal-body">
            <form>
            <div>
            <div className="form-group">
            <label for="txtTenHoatDong">
            <h6>Tên Hoạt Động</h6>
                </label>
			<input name="txtTenHoatDong" className="form-control" id="txtTenHoatDong" type="text" placeholder="Nhập tên hoạt động"/>
			</div>
            <div className="card mb-1">
            <div className="form-row m-1 card-body">
            <div className=" col-4">
            <label for="dtNgayDienRa">
            <h6>Ngày Diễn Ra Hoạt Động</h6>
                </label>
                <input name="dtNgayDienRa" className="form-control" id="dtNgayDienRa" type="date" placeholder="Nhập ngày diễn ra"/>
            </div>
            <div className=" col-4">
            <label for="txtThoiGianBatDau">
                    <h6>Thời Gian Bắt Đầu Hoạt Động</h6>
                </label>
            <input name="txtThoiGianBatDau" className="form-control" id="txtThoiGianBatDau" type="text" placeholder="Thời gian bắt đầu"/>
            </div>
            <div className=" col-4">
            <label for="ttxtThoiGianKetThu">
            <h6>Thời Gian Kết Thúc Hoạt Động</h6>
                </label>
            <input name="txtThoiGianKetThuc" className="form-control" id="txtThoiGianKetThuc" type="text" placeholder="Thời gian kết thúc"/>
			</div>
            </div>
            </div>
            <div className="card mb-1">
            <div className="form-row m-1 card-body">
            <div className=" col-4">
            <label for="txtTenHoatDong">
            <h6>Khoa</h6>    
            </label>
            <select id="inputState" className="form-control">
            <option selected>All</option>
            <option>...</option>
            </select>
            </div>
            <div className=" col-4">
            <label for="txtTenHoatDong">
            <h6>Ngành</h6> 
            </label>
            <select id="inputState" className="form-control">
            <option selected>All</option>
            <option>...</option>
            </select>
            </div>
            <div className=" col-4">
            <label for="txtTenHoatDong">
             <h6>Lớp</h6> 
            </label>
            <select id="inputState" className="form-control">
            <option selected>All</option>
            <option>...</option>
            </select>
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
            </div>
            </div>
        );
    }
}

export default Activity;