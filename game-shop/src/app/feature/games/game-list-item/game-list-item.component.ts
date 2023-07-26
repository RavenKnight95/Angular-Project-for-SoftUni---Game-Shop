import { Component, Input, OnInit } from '@angular/core';
import { IGame } from 'src/app/core/interfaces/game';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {

  @Input() game: IGame;

  constructor() { }

  ngOnInit(): void {

  }
}
