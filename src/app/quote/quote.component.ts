import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  initialUpVote=0;
  initialDownVote=0;
quotes: Quote[]=[
  new Quote(1,"Learn from the mistakes of others. You can't live long enough to make them all yourself","Eleanor Roosevelt","david"),
  new Quote(2,"The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become","","peter"),
  new Quote(3,"When one door closes another opens or you can open the closed door that’s how doors work","stephen","hawkins"),
  new Quote(4,"Your Life can easily flow and be filled with joy. Embrace the possibilities","W.E.B. Du Bois","samuel"),
  new Quote(5,"At the age of 18, I made up my mind to never have another bad day in my life. I dove into a endless sea of gratitude from which I've never emerged","Patch Adams MD","moses"),
  new Quote(5,"If i was a line of code i would be an abstract to hide my implementation from everyone","Unknown","margaret"),
];

deleteQuote(isComplete,index){
  if(isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].myquote} ?`)
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
}
toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  this.quotes.push(quote);

}
  constructor() { }

  ngOnInit(): void {
  }

}
