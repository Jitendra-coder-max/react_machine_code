// textReducer.js
import { SET_TEXT } from './actions';

const initialTextState = { text: '' };

function textReducer(state = initialTextState, action) {
  switch (action.type) {
    case SET_TEXT:
      return { text: action.payload };
    default:
      return state;
  }
}

export default textReducer;
