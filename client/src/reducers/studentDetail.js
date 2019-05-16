const initialState=[]
const studentDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_STUDENTDETAIL":
            
            return action.student;
    }
  return state;
};
export default studentDetailReducer;
