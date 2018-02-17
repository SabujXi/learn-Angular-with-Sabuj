import { Component } from '@angular/core';

interface ISocialLink{
  title: string;
  link: string;
  is_active: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input_data: string = "";
  
  react(){
    this.input_data += " : changed!";
  }
}