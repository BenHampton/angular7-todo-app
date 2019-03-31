import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit {

  @Input() tasks;
  @Input() individualTasks;

  profileForm = new FormGroup({
    newTask: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    newAssignee: new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ])
  });

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmitAddTask() {

    if (this.tasks !== undefined) {
      this.taskService.addTask(this.profileForm.get('newTask').value, this.profileForm.get('newAssignee').value, this.tasks);
    }

    if (this.individualTasks !== undefined) {
      this.taskService.addTask(this.profileForm.get('newTask').value, this.profileForm.get('newAssignee').value, this.tasks);
    }

  }

}
