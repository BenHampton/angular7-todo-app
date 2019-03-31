import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {IndividualTaskComponent} from './individual-task/individual-task.component';

export const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: 'todo-list/:assignee',
    component: IndividualTaskComponent
  },
  {
    path: '',
    redirectTo: '/todo-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/todo-list'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
