import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosAddComponent } from './todos/todos-add/todos-add.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';

const routes: Routes = [
  {path: "", redirectTo: "todos/list", pathMatch:"full"},
  {path:"todos/list", component: TodosListComponent,},
  {path:"todos/add", component: TodosAddComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
