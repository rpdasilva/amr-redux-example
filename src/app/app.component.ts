import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';

import { incrementCount, decrementCount, setCount } from './state/counter/counter.actions';
import { getCount } from './state/counter/counter.selectors';
import { getTodos, getSelectedTodo, getSelectedTodoId } from './state/todos/todos.selectors';
import { createTodo, addTodo, removeTodo, completeTodo, selectTodo } from './state/todos/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  count$: Observable<number>;
  todos$: Observable<any>;
  selectedTodo$: Observable<any>;
  // selectedTodoId$: Observable<any>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.count$ = this.store.select(getCount);
    this.todos$ = this.store.select(getTodos);

    /**
     * Manual less preferred method
     */
    // this.selectedTodoId$ = this.store.select(getSelectedTodoId);
    // this.selectedTodo$ = this.todos$
    //   .combineLatest(this.selectedTodoId$)
    //   .map(([todos, selectedTodoId]) =>
    //     todos.filter(todo => todo.id === selectedTodoId)[0]);

    /**
     * Preferred
     */
    this.selectedTodo$ = this.store.select(getSelectedTodo);
  }

  incrementCount() {
    this.store.dispatch(incrementCount());
  }

  decrementCount() {
    this.store.dispatch(decrementCount());
  }

  setCount(value: number) {
    this.store.dispatch(setCount(value));
  }

  createTodo(title: string, description: string) {
    const todo = createTodo(title, description);
    this.store.dispatch(addTodo(todo));
  }

  completeTodo(id: string) {
    this.store.dispatch(completeTodo(id));
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo(id));
  }

  selectTodo(id) {
    this.store.dispatch(selectTodo(id));
  }
}
