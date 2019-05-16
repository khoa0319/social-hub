import * as types from '../actions/types';
const initialState = {}

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_UPDATE_INFO:
      return action.data;

    default:
      break;
  }
  return state
}

export default updateReducer;