import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-individual-task',
  templateUrl: './individual-task.component.html',
  styleUrls: ['./individual-task.component.css']
})
export class IndividualTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private taskService: TaskService) { }

  ngOnInit() {
    this.getIndividualTask();
  }

  getIndividualTask() {
    const assignee = this.activatedRoute.snapshot.paramMap.get('assignee');
    this.taskService.getTask(assignee)
      .subscribe( task => this.tasks = task);
  }

  goBack() {
    this.location.back();
  }
}
