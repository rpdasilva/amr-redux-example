import { createSelector } from '@ngrx/store';

export function getTodos(state) {
  return state.todos.todos;
}

export function getSelectedTodoId(state) {
  return state.todos.selectedTodoId;
}

export const getSelectedTodo = createSelector(
  getTodos,
  getSelectedTodoId,
  (todos, selectedTodoId) => {
    return todos.filter(todo => todo.id == selectedTodoId)[0];
  }
);
