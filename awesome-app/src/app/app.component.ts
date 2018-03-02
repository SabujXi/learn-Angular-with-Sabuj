import { Component, TemplateRef, Input, ElementRef } from '@angular/core';

interface Task{
  title: string,
  is_canceled: boolean,
  f_idx: number
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
      is_canceled: false,
      f_idx: null
    },
    {
      title:"Take a nap",
      is_canceled: false,
      f_idx: null
    },
    {
      title: "Start learning Angular with Sabuj",
      is_canceled: false,
      f_idx: null
    }
  ];

  filtered_tasks: Array<Task> = [];

  filter_by: string = "";
  
  constructor(){
    this.filterTasks();
  }

  clearToDo(){
    let do_delete = confirm("Are you sure to delete all tasks?");
    if (do_delete){
      this.tasks.splice(0);
    }
    this.filterTasks();
  }

  addTask(input){
    let value = input.value;
    input.value = "";
    this.tasks.push(
      {
        title: value,
        is_canceled: false,
        f_idx: null
      });
    this.filterTasks();
  }

  cancelTask(idx: number){
    if (this.tasks[idx].is_canceled){
      this.tasks[idx].is_canceled = false;
    }else{
      this.tasks[idx].is_canceled = true;
    }
    this.filterTasks();
  }

  deleteTask(idx: number){
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete){
      this.tasks.splice(idx, 1);
      this.filterTasks();
    }
  }

  editTask(idx: number){
    let title = this.tasks[idx].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.tasks[idx].title = result;
      this.filterTasks();
    }
  }

  filterTasks(){
    let filtered_tasks: Array<Task> = [];
    for(let idx=0; idx < this.tasks.length; idx++){
      let task = this.tasks[idx];
      let title = task.title;
      let title_lower = title.toLowerCase();
      if (title_lower.includes(this.filter_by)){
        let filter_len = this.filter_by.length;
        let title_len = title.length;

        let start_idx = title_lower.indexOf(this.filter_by);
        let end_idx = start_idx + filter_len;

        let start = title.substr(0,  start_idx );
        let middle = title.substr(start_idx, filter_len);
        let end = title.substr(end_idx, title_len);

        let converted_title = start + "<b>" + middle + "</b>" + end;

        filtered_tasks.push(
          <Task>{
            title: converted_title,
            is_canceled: task.is_canceled,
            f_idx: idx
          }
        );
      }
    }

    this.filtered_tasks = filtered_tasks;
  }

  addFilter(filter_input){
    let filter_by: string = filter_input.value;
    filter_by = filter_by.toLowerCase();
    this.filter_by = filter_by;
    this.filterTasks();
  }

  clearFilter(filterInput){
    filterInput.value = "";
    this.filter_by = "";
    this.filterTasks();
  }
}