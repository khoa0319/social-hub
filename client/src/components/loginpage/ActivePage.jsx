import React from 'react';

const ActivePage = () => {
  return (
    <div className="row">
      <form>
        <div className="form-group">
          <label for="ID">Mã số Sinh Viên</label>
          <input type="text" className="form-control" name="ID" id="ID" aria-describedby="emailHelp" placeholder="mã số sinh viên" />
          <small id="emailHelp" className="form-text text-muted">Mã số sinh viên do trường cấp</small>
        </div>
        <div className="form-group">
          <label for="Name">Họ Tên</label>
          <input type="text" className="form-control" name="Name" id="Name" placeholder="Họ Tên" />
        </div>
        <div className="form-group">
          <label for="BirthDate">Ngày Sinh</label>
          <input type="date" className="form-control" name="BirthDate" id="BirthDate" placeholder="Ngày Sinh" />
        </div>
        <div className="form-group">
          <label for="Faculty">Khoa</label>
          <input type="text" className="form-control" name="Faculty" id="Faculty" placeholder="Khoa" />
        </div>
        <div className="form-group">
          <label for="Major">Ngành</label>
          <input type="text" className="form-control" name="Major" id="Major" placeholder="Ngành" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ActivePage;