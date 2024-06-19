// countReducer.js
import { INCREMENT, DECREMENT } from './components/actions';

const initialCountState = { count: 0 };

function countReducer(state = initialCountState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default countReducer;
