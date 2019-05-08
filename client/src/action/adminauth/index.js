import Axios from 'axios';
export const getStudentList = () => {
    return function(dispatch)
    {
    Axios.get('http://localhost:5000/api/admins/studentlist')
      .then(res=>dispatch({
          type:"GET_STUDENTLIST",
          data:res.data
      })).catch(res=>dispatch({
        type:"GET_STUDENTLIST",
        data:[],
      }))
    }
}