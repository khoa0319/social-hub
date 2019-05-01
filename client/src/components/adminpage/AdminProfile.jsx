import React, { Component } from 'react';

class AdminProfile extends Component {
    render() {
        return (
            <div className="text-center">
               <h4>Admin</h4>
               <img src="img/holder.jpg" className="img-fluid w-25 rounded-circle" alt="avatar" />
               <h6 className="mt-2">Mạnh Hùng</h6>
            </div>
        );
    }
}

export default AdminProfile;