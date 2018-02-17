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
  current_quote = "";
  quotes = [];

  removeLink(idx){
    this.social_links.splice(idx, 1);
  }

  saveQuote(){
    if (this.current_quote){
      this.quotes.push(this.current_quote);
    }
  }

  inputChanged(evt){
      this.current_quote = evt.target.value;
  }

  constructor(){
  }
}