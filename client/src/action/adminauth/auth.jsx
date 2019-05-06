import axios from 'axios'
import {connect} from 'react-redux'
var config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'blob'
  };
  
export const adminlogin=(data,ownProps)=>
{
    return(dispath)=>
    {
        axios
        .post('http://localhost:5000/api/admins/login',data)
        .then(res=>{
          return res.data.msg
        })
        .catch(console.log)
    }
}