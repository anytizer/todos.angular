import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { todo } from 'src/app/dtos';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  todos: todo[] = [];

  constructor(private api: ApiService){
    this.todos = this.api.list_todos();
  }

  delete(t: number)
  {
    if(this.api.delete(t))
    {
      this.todos.splice(t, 1);
    }
    //this.router.navigate("todos/")
  }
}
