

const initialState = {}
const studentReducer = (state = initialState, action) => {

  switch (action.type) {
    case "GET_STUDENTLIST":
      const data = action.data;
      return data;
    default:
      break;
  }
  return state;
};
export default studentReducer;
