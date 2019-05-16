import * as types from '../actions/types';
const initialState = ''

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ID:

      return action.id
  
    default:
      break;
  }
  return state
}

export default idReducer;