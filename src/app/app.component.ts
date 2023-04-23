import { Component, DoCheck } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskslistService } from './services/taskslist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskslistService]
})
export class AppComponent {
  Newtask: { Task_title: string, Task_description: string , Id:number} = { Task_title: '', Task_description: '' ,Id:0 };
  count:number=0;
  constructor(private fb: FormBuilder, private tasklistService: TaskslistService) { }

  task_details = this.fb.group({
    task_title: ['', [Validators.required, Validators.minLength(5)]],
    task_description: ['', [Validators.required, Validators.minLength(5)]]
  })
  onBlur(): void {
    if (this.task_details.controls.task_title.pristine) {
      this.task_details.controls.task_title.reset()
    }
  }
  onSubmit() 
  {
    this.count++;
    this.Newtask.Task_title=this.task_details.controls.task_title.value?.toString()!;
    this.Newtask.Task_description=this.task_details.controls.task_description.value?.toString()!;
    this.Newtask.Id=this.count;
    this.tasklistService.logToTasklist(this.Newtask);

  }
}
