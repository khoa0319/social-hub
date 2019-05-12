import * as types from '../actions/types';

const initialState = {};

const activityDetailReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.SET_ACTIVITYDETAIL:
      return action.activity;

    default:
      break;
  }
  return state
}

export default activityDetailReducer;