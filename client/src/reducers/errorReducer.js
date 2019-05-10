import * as types from '../actions/types';
const initialState = null

const errorReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_ERRORS:
      return action.error

    default:
      break;
  }
  return state
}

export default errorReducer;