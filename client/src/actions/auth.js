/* 3rd party modules */
import axios from 'axios';
import _ from 'lodash';
/* App modules */
import * as types from './types';


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
           
  }
}

export const getID = (id) => {
  return {
    type: types.GET_ID,
    id
  }
}

export const getError = (err) => {
  return {
    type: types.GET_ERRORS,
    err
  }
}

export const setCurrentUser = (profile) => {
  return {
    type: types.SET_CURRENT_USER,
    profile: profile
  }
}