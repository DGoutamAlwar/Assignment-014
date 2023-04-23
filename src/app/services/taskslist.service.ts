import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskslistService{
  
  constructor() {}
  taskList:Array<{Task_title:string , Task_description:string, Id:number}>=[];

  logToTasklist(NewTask:{Task_title:string , Task_description:string , Id:number})
  {
    this.taskList.push(NewTask);
  } 
  sendToComponent(){
    return this.taskList;
  }
}
