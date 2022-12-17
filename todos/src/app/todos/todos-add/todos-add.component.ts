import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { todo } from 'src/app/dtos';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.scss']
})
export class TodosAddComponent {
  todo: todo = new todo();

  constructor(private api: ApiService, private router: Router){}

  save(todo: todo): void {
    this.api.save(todo); //.subscribe((x:boolean) => alert(x););
    this.router.navigate(["/todos/list", {}]);
  }
}
