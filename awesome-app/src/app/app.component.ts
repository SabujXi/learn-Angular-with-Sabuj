import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent {
  name = "Md. Sabuj Sarker";
  profession = "Software Engineer";
  website = "http://sabuj.me";
  time = new Date();
  counter = 0;
  
  constructor(){
    setTimeout(()=>{
      this.profession = "Writer";
    }, 1000);

    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  handleClick(){
    this.counter++;
  }
}