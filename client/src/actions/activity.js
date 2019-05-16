/* 3rd party modules */
import axios from 'axios';
/* App modules */
import * as types from './types'
import { getError } from './auth';

export const fetchActivities = (data) => {
  return dispatch => {    
    setTimeout(() => {
      axios.get(`http://localhost:5000/api/activities/?skip=${data.skip}&limit=${data.limit}`)
        .then(res => {
          if (res.data) {
            dispatch(getActivities(res.data.result));
          }
        })
        .catch(error => {
          console.log(error);
          dispatch(getError(error));
        })
    }, 1000);
  }
}

export const viewActivityDetail = (data) => {
  return dispatch => {
    dispatch(setActivityDetail(data));
  }
}

export const setActivityDetail = (activity) => {
  return {
    type: types.SET_ACTIVITYDETAIL,
    activity
  }
}


export const getActivities = (activities) => {
  return {
    type: types.GET_ACTIVITIES,
    activities
  }
}