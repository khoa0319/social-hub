import {combineReducers} from 'redux';
import errors from './errorReducer';
import auth from './authReducer';
import id from './idReducer';
import activities from './activityReducer';
import activity from './activityDetailReducer';
const root = combineReducers({
  errors,
  auth,
  id,
  activities,
  activity
})

export default root;