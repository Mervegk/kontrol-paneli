import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 todos: Todo[] = [
   new Todo('Bu bir örnektir.'),
   new Todo('Lütfen hatasız çalış')
 ]

  constructor() {}

  getTodos() {
    return this.todos
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
    this.saveState()
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo = this.getTodo(id)
    Object.assign(todo, updatedTodoFields)
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    if(index == -1) return
    this.todos.splice(index, 1)
    this.saveState()
  }

  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  loadState() {
    const todosInStorage = JSON.parse(localStorage.getItem('todos') || '()')
    this.todos = todosInStorage
  }

}
