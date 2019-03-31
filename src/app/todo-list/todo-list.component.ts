import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe( task => this.tasks = task);
  }

  removeTask(id): void {
    this.taskService.removeTask(id, this.tasks)
      .subscribe( task => this.tasks = task);
  }
}
