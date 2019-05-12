import {combineReducers} from 'redux';
import errors from './errorReducer';
import auth from './authReducer';
import id from './idReducer';
import studentList from './studentList'
const root = combineReducers({
  errors,
  auth,
  id,
  studentList
})

export default root;