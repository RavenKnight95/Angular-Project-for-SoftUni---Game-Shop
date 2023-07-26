import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/game.service';
import { IGame } from 'src/app/core/interfaces/game';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  game: IGame;
  searchPressed: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  searchHandler(searchForm) {
    this.searchPressed = true;
    let searchValue = searchForm.value.search;

    if (searchValue === '') {
      this.game = undefined;
      return;
    }

    this.gameService.loadGameList$().subscribe(gameList => {
      let pattern = new RegExp(searchValue, 'i');
      const myGameList = gameList.slice();

      for (let i = 0; i < myGameList.length; i++) {
        let currentGame = myGameList[i];

        if (pattern.test(currentGame.title)) {
          this.game = currentGame;
          break;
        }
      }
    })
  }
}
