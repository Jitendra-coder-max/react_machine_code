// rootReducer.js
import { combineReducers } from 'redux';
import countReducer from './countReducer';
import textReducer from '../textReducer';

const rootReducer = combineReducers({
  count: countReducer,
  text: textReducer,
});

export default rootReducer;
