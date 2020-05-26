import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cards, cardsArray } from '../cards';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Cards: Cards[] = [];

  constructor() {
    this.Cards = cardsArray;
  }

  ngOnInit(): void {
  }

  delete(id) {
    for (let i = 0; i < this.Cards.length; i++) {
      if (this.Cards[i].cardId == id){
        this.Cards.splice(i, 1);
      }
    }
  }

  addCard(Name, Color) {
    Cards.id = this.Cards.length != 0 ? ++Cards.id : 1;
    let Status = Boolean(Math.round(Math.random()));
    this.Cards.push({ cardId: Cards.id, status: Status, name: Name, color: Color })
  }

  deleteAll() {
    this.Cards.length = 0;
  }
}