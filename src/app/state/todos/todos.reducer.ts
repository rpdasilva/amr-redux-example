import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, SELECT_TODO } from './todos.types';
import { createTodo } from './todos.actions';

export const initialState = {
  todos: [
    createTodo('First todo item', 'Lorem ipsum sit dolor'),
    createTodo('Second todo', 'Lorem ipsum sit dolor'),
    createTodo('Third todo', 'Lorem ipsum sit dolor'),
    createTodo('Fourth todo', 'Lorem ipsum sit dolor'),
    createTodo('Fifth todo', 'Lorem ipsum sit dolor')
  ],
  selectedTodoId: null
}

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const todos = [ ...state.todos, action.payload ];
      return { ...state, todos };
    }

    case REMOVE_TODO: {
      const todos = state.todos.filter(todo => todo.id !== action.payload);
      return { ...state, todos };
    }

    case COMPLETE_TODO: {
      const todos = state.todos
        .map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, isComplete: true };
          } else {
            return todo;
          }
        });

      return { ...state, todos };
    }

    case SELECT_TODO: {
      return { ...state, selectedTodoId: action.payload };
    }

    default:
      return state;
  }
}
