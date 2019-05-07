import {combineReducers} from 'redux';
import errors from './errorReducer';
import auth from './authReducer';
import id from './idReducer';
const root = combineReducers({
  errors,
  auth,
  id
})

export default root;