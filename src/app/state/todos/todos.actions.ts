import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, SELECT_TODO } from './todos.types';

let id = 1;

export function createTodo(title: string, description: string) {
  return { id: id++, title, description, isComplete: false };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: id
  };
}

export function selectTodo(id) {
  return {
    type: SELECT_TODO,
    payload: id
  };
}
