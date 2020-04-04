import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  quotes = [
    new Quote(1, 'Unknown', 'If i was a line of code i would be an abstract to hide my implementation from everyone', 'admin', new Date(1990, 5, 10)),
    new Quote(2, 'Mohandas Gandhi', 'Strength does not come from physical capacity. It comes from an indomitable will.', 'admin', new Date(1950, 3, 23)),
    new Quote(3, 'Raymond Kennington', 'Act in haste and repent at leisure.Code too soon and debug forever', 'admin', new Date(2012, 8, 17)),

  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }
  constructor() { }

  ngOnInit(): void {
  }

}
