import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameService } from 'src/app/core/game.service';
import { IGame } from 'src/app/core/interfaces/game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  gameList: IGame[];
  filteredGameList: IGame[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.loadGameList$().subscribe(gamelist => {
      this.gameList = gamelist;
    })
  }
  filterGames(filterForm: NgForm) {
    let genre = filterForm.value.genre;

    if (genre === 'any') {
      this.filteredGameList = this.gameList;
      return;
    }

    this.filteredGameList = this.gameList.filter(b => b.genre === genre);
  }

}
