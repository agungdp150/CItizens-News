import {combineReducers} from 'redux';
import registerReducer from './registerReducer';

export default combineReducers({
  register1 : registerReducer
})