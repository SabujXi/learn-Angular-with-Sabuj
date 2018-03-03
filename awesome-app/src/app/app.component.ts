import { Component, TemplateRef, Input, ElementRef } from '@angular/core';

class Task{
  title: string;
  is_canceled: boolean = false;
  displayable: boolean = true;

  constructor(title: string, private component){
    this.title = title;
  }

  get display_title(){
    let filter_by = this.component.filter_by;
    var highlighted_title = this.title;

    if (filter_by !== ""){
      let title = this.title;
      let title_lower = title.toLowerCase();
      if (title_lower.includes(filter_by)){
        let filter_len = filter_by.length;
        let title_len = title.length;
  
        let start_idx = title_lower.indexOf(filter_by);
        let end_idx = start_idx + filter_len;
  
        let start = title.substr(0,  start_idx );
        let middle = title.substr(start_idx, filter_len);
        let end = title.substr(end_idx, title_len);
        highlighted_title = start + "<b>" + middle + "</b>" + end;
      }
    }

    if (this.is_canceled){
      highlighted_title = "<s>" + highlighted_title + "</s>"
    }

    return highlighted_title;
  }

  swapCancel(){
    if (this.is_canceled){
      this.is_canceled = false;
    }else{
      this.is_canceled = true;
    }
  }

  setDisplay(){
    // handles the logic whether the task should be displayed or not.
    let filter_by = this.component.filter_by;
    if (filter_by !== ""){
      let title = this.title;
      let title_lower = title.toLowerCase();
      if (title_lower.includes(filter_by)){
        this.displayable = true;
      }else{
        this.displayable = false;
      }
    }else{
      this.displayable = true;
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<Task> = [
    new Task("Go home", this),
    new Task("Take a nap", this),
    new Task("Start learning Angular with Sabuj", this)
  ];

  filter_by: string = "";
  
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
      new Task(value, this)
    );
  }

  cancelTask(idx: number){
    this.tasks[idx].swapCancel();
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
      this.setTaskDisplays();
    }
  }

  private setTaskDisplays(){
    for(let task of this.tasks){
      task.setDisplay();
    }
  }

  addFilter(filter_input){
    let filter_by: string = filter_input.value;
    filter_by = filter_by.toLowerCase();
    this.filter_by = filter_by;
    this.setTaskDisplays();
  }

  clearFilter(filterInput){
    filterInput.value = "";
    this.filter_by = "";
    this.setTaskDisplays();
  }
}