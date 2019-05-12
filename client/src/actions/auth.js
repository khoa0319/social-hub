/* 3rd party modules */
import axios from 'axios';
import _ from 'lodash';
import jwtDecode from 'jwt-decode';
/* App modules */
import * as types from './types';
import fingerprint from '../utils/fingerprint';
import setHeaders from '../utils/setHeaders';
export const activate = (data) => {
  return (dispatch) => {
    axios.post('http://localhost:5000/api/users/activate', data)
      .then(res => {        
        if (res.status === 200 && res.data.msg === 'SUCCESS') {
          dispatch(getID(res.data.id))
        }
      })
      .catch(err => {
        dispatch(getError(_.get(err, 'response.data')))
      })
  }
}

// export const updateInfo = (data) => {
//   return (dispatch) => {
//     axios.post('http://localhost:5000/api/users/updateInfo', data)
//       .then(res => {
//         if (res.status === 200 && res.data.msg === 'SUCCESS') {
//           dispatch(getID(res.data.id))          
//         }
//       })
//       .catch(err => {
//         dispatch(getError(_.get(err, 'response.data')))
//       })
//   }
// }

export const login = (data) => {
  return (dispatch) => {
    fingerprint(fp => {
      axios.post(`http://localhost:5000/api/users/login`, {...data, fp})
      .then(res => {
        // change state for no errors
        dispatch(getError(null));

        const token = res.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('fingerprint', fp);
        
        setHeaders(token, fp);
        
        const decoded = jwtDecode(token);

        console.log(decoded);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => {        
        dispatch(getError(_.get(err, 'response.data')))
      })
    })    
  }
}

export const getID = (id) => {
  return {
    type: types.GET_ID,
    id
  }
}

export const getError = (error) => {
  return {
    type: types.GET_ERRORS,
    error
  }
}

export const setCurrentUser = (profile) => {
  return {
    type: types.SET_CURRENT_USER,
    profile: profile
  }
}