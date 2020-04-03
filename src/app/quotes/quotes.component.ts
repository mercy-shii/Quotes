import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[new Quotes("Walter","Walter Hagan","'You're only here for a short visit.Don't hurry,dont worry.And be sure to smell the flowers along the way.'"),
  new Quotes("Eleaner","Eleaner Roosevelt","'If life was predictable it would cease to be life,And Be without Flavour'"),
  new Quotes("Trump","'Sometimes by losing a battle ")
]
  preNum:number
  lastNum:number
  counter:number

  addQuotes(emittedQuotes){
    this.quotes.push(emittedQuotes)
  }

  upvote(i){
    this.quotes[i].upvotes+=1
  }

  downvote(i){
    this.quotes[i].downvotes+=1
  }

  delQuotes(i){
    this.quotes.splice(i,1)
  }

  highestupvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0; this.counter < this.quotes.length; this.counter++){
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum >this.preNum){this.preNum = this.lastNum }
    }
    return this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
