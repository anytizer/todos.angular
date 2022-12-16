import { Injectable } from '@angular/core';
import { todo } from './dtos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private todos: todo[] = [];
  constructor() {
    this.todos.push(this.random("done or not some message?"));
    this.todos.push(this.random("done or not some message?"));
    this.todos.push(this.random("done or not some message?"));
    this.todos.push(this.random("done or not some message?"));
    this.todos.push(this.random("done or not some message?"));
    this.todos.push(this.random("done or not some message?"));
   }

   private random(message: string)
   {
    let td: todo = new todo();
    td.completed = false;
    td.message = message;
    return td;
   }

  public list_todos(): todo[]
  {
    return this.todos;
  }

  public save(todo: todo){
    // push to the database
    this.todos.push(todo);
    return true;
  }

  public delete(index: number): boolean
  {
    // call to http()
    //this.todos.splice(index, 1);
    return true;
  }
}
