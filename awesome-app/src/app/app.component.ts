import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo_array: Array<string> = [
    "Go home",
    "Take a nap",
    "Start learning Angular with Sabuj"
  ]

  clearToDo(){
    this.todo_array.splice(0);
  }
}