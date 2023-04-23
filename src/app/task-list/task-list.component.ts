import { Component } from '@angular/core';
import { TaskslistService } from 'src/app/services/taskslist.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskslistService]
})
export class TaskListComponent 
{
  constructor(private tasklistService: TaskslistService)
  {
    console.log(this.tasklistService.sendToComponent());
  };
  
}
