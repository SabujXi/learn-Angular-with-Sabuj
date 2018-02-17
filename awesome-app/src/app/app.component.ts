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
  name = "Md. Sabuj Sarker";
  profession = "Software Engineer";
  website = "http://sabuj.me";
  social_links: ISocialLink[] = [
    { title: "Facebook", link: "https://facebook.com/SabujXiP", is_active: true },
    { title: "Twitter", link: "https://twitter.com/SabujXi", is_active: false },
    { title: "Github", link: "https://github.com/SabujXi", is_active: true }
  ];
  text_color_class = "white green_bg";

  constructor(){
    setTimeout(() => {
      this.text_color_class = "yellowgreen green_bg";
    }, 2000);
    
    setTimeout(() => {
      this.link_style = "underline";
    }, 4000);
  }
}