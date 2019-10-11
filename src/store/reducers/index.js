import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import getnewsReducer from './getnewsReducer';
import getdetailReducer from './getdetailReducer';

export default combineReducers({
  register1 : registerReducer,
  login1 : loginReducer,
  getnews1 : getnewsReducer,
  getdetail1 : getdetailReducer
})