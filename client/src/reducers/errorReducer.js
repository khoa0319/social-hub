import * as types from '../actions/types';
const initialState = null

const errorReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_ERRORS:
      // check for the error in case of no internet, no server,...
      if (action.error) return action.error
      return null

    default:
      break;
  }
  return state
}

export default errorReducer;