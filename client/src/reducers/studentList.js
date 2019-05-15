
const initialState=[]
const studentReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_STUDENTLIST":
            const data=state.concat(action.data);
            return data;
    }
  return state;
};
export default studentReducer;
