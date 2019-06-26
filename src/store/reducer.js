import headerReducer from '../common/header/store/reducer';
import { combineReducers } from 'redux-immutable';


export default combineReducers({
  header: headerReducer
})