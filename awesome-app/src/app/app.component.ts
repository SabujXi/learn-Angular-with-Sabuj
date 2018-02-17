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
  social_links = [
    "https://facebook.com/SabujXiP",
    "https://twitter.com/SabujXi",
    "https://github.com/SabujXi"
  ]

  constructor(){
    setTimeout(() => {
      this.social_links.push("https://youtube.com/c/MdSabujSarker");
    }, 2000);
    
    setTimeout(() => {
      this.social_links.shift();
    }, 4000);
  }
}