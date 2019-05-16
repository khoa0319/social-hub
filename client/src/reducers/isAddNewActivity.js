const initialState = false;

const isAddNewActivity = (state = initialState, action) => {

  switch (action.type) {
    case "Is_Add_New_Activity": 
      return action.value
  }
  return state
}

export default isAddNewActivity;