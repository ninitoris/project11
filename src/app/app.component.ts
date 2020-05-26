import { Component, ViewChild, ElementRef } from '@angular/core';
import { Cards, cardsArray } from './cards';
//import { createReadStream } from 'fs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  Card: Cards[];

  constructor() {
    Cards.id = 0;
    for (let i = 0; i < 10; i++) {
      let Status = Boolean(Math.round(Math.random()));
      let Color = Status === true ? "green" : "red";
      cardsArray.push({ cardId: ++Cards.id, status: Status, name: "Default", color: Color});
    }
  }
}
