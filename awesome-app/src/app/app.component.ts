import { Component } from '@angular/core';

interface Task{
  title: string,
  is_canceled: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<Task> = [
    {
      title: "Go home",
      is_canceled: false
    },
    {
      title:"Take a nap",
      is_canceled: false
    },
    {
      title: "Start learning Angular with Sabuj",
      is_canceled: false
    }
  ];

  clearToDo(){
    this.tasks.splice(0);
  }

  addTask(value: string){
    this.tasks.push(
      {
        title: value,
        is_canceled: false
      });
  }
}