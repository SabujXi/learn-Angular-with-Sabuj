import { Component, TemplateRef, Input, ElementRef } from '@angular/core';

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

  filtered_tasks: Array<Task> = this.tasks;

  clearToDo(){
    let do_delete = confirm("Are you sure to delete all tasks?");
    if (do_delete){
      this.tasks.splice(0);
    }
  }

  addTask(input){
    let value = input.value;
    input.value = "";
    this.tasks.push(
      {
        title: value,
        is_canceled: false
      });
  }

  cancelTask(idx: number){
    if (this.tasks[idx].is_canceled){
      this.tasks[idx].is_canceled = false;
    }else{
      this.tasks[idx].is_canceled = true;
    }
  }

  deleteTask(idx: number){
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete){
      this.tasks.splice(idx, 1);
    }
  }

  editTask(idx: number){
    let title = this.tasks[idx].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.tasks[idx].title = result;
    }
  }

  filterTasks(filter_input){
    let filter_by: string = filter_input.value;
    let filtered_tasks: Array<Task> = [];
    for(let task of this.tasks){
      if (task.title.includes(filter_by)){
        filtered_tasks.push(task);
      }
    }

    this.filtered_tasks = filtered_tasks;
  }
}