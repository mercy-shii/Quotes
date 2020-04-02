import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quotes:Quotes

  constructor() { }

  ngOnInit(): void {
  }

}
