import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  register1 : registerReducer,
  login1 : loginReducer
})