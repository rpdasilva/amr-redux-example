import { INCREMENT, DECREMENT, SET } from './counter.types';

export function incrementCount() {
  return {
    type: INCREMENT
  };
}

export function decrementCount() {
  return {
    type: DECREMENT
  };
}

export function setCount(value: number) {
  return {
    type: SET,
    payload: value
  }
}
