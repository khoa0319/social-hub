import * as types from '../actions/types';
const initialState = {

}

const errorReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_ERRORS:
      return { ...action.err }

    default:
      break;
  }
  return state
}

export default errorReducer;