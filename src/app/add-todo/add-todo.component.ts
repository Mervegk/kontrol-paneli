import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  showValidationErrors: boolean

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(myform: NgForm) {
    if (myform.invalid) return //this.showValidationErrors = true
    const todo = new Todo(myform.value.text)
    this.todoService.addTodo(todo)
    this.router.navigateByUrl('/todos')
  }

}
