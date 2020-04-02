import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuotes= new EventEmitter()
  quotestr:string
  quotesPublisher:string
  quotesAuthor:string
  theQuotes:any

  submitQuotes( ){
    this.theQuotes= new Quotes(this.quotesPublisher,this.quotesAuthor,this.quotestr)
    this.quotestr=''
    this.quotesAuthor=''
    this.quotesPublisher=''
    this.emitQuotes.emit(this.theQuotes)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
