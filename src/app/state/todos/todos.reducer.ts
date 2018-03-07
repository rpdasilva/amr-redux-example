import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from './todos.types';

export function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.payload ];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, isComplete: true };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
}
