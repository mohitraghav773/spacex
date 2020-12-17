import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardData: any;
  @HostBinding('class.widthControl') addDefaultClass: boolean;

  constructor() { }

  ngOnInit() {
    this.addDefaultClass = true;
  }

  public fetchData(data: any):void {
    this.cardData = data;
  }



}
