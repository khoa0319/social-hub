import Axios from 'axios';
export const getStudentList = (data) => {
    return function(dispatch)
    {
    Axios.get(`http://localhost:5000/api/admins/studentlist/?skip=${data.skip}&limit=${data.limit}`)
      .then(res=>dispatch({
          type:"GET_STUDENTLIST",
          data:res.data
      })).catch(res=>dispatch({
        type:"GET_STUDENTLIST",
        data:[],
      }))
    }
}
export const getStudentDetail = (student) => {
  return {
    type: "GET_STUDENTDETAIL",
    student
  }
}