import { INCREMENT, DECREMENT, SET } from './counter.types';

/**
 * action = {
 *  type: INCREMENT,
 *  payload,
 *  meta
 * }
 */

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case SET:
      return action.payload;

    default:
      return state;
  }
}
