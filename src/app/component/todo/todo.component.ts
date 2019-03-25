import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo'
import { Title } from '@angular/platform-browser';
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
     {
        id: 1,
        title: 'new one',
        completed: false
     },
      {
        id: 2,
        title: 'new two',
        completed: true
      },
      {
        id: 34,
        title: 'new three',
        completed: false
      }
    ]
  }

}
