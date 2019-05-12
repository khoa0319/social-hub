import * as types from '../actions/types';
const initialState = [];

const activityReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_ACTIVITIES:
      const newActivities = state.concat(action.activities)
      console.log("new array", newActivities);
      return newActivities

    default:
      break;
  }
  return state
}

export default activityReducer;