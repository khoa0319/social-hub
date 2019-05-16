import * as types from '../actions/types';
import _ from 'lodash';
const initialState = {
  profile: {},
  isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        profile: action.profile,
        isAuthenticated: !_.isEmpty(action.profile)
      }
  
    default:
      break;
  }
  return state
}

export default authReducer;