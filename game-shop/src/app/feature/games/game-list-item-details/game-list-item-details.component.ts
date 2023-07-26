import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/core/game.service';
import { IGame } from 'src/app/core/interfaces/game';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-game-list-item-details',
  templateUrl: './game-list-item-details.component.html',
  styleUrls: ['./game-list-item-details.component.css']
})
export class GameListItemDetailsComponent implements OnInit {

  game: IGame;
  isOwner: boolean = false;
  isLoggedIn: boolean = this.userService.isLogged;
  currentUser = this.userService.currentUser;
  likes: number;

  canLike: boolean = true;
  canBuy: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const gameId = params['gameId'];
      this.gameService.loadGameById$(gameId).subscribe(game => {
        this.game = game;
        this.likes = this.game.likes.length;

        if (this.game.owner === this.currentUser?._id) {
          this.isOwner = true;
        }
      })
    });
  }
  deleteGame() {
    this.activatedRoute.params.subscribe(params => {
      const gameId = params['gameId'];
      this.gameService.removeGame$(gameId).subscribe(result => {
        console.log(result)
        this.router.navigate(['/library']);
      });
    });
  }

  likeGame() {
    if (this.game.likes.includes(this.currentUser?._id)) {
      this.canLike = false;
      return;
    }

    this.activatedRoute.params.subscribe(params => {
      const gameId = params['gameId'];

      this.gameService.likeGame$(gameId).subscribe({
        next: data => {
          if (!this.game.likes.includes(this.currentUser?._id)) {
            this.likes++;
            this.canLike = false;
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }


  buyGame() {
    if (this.game.boughtGameUsers.includes(this.currentUser?._id)) {
      this.canBuy = false;
      return;
    }
    this.activatedRoute.params.subscribe(params => {
      const gameId = params['gameId'];

      this.gameService.buyGame$(gameId).subscribe({
        next: data => {
          if (!this.game.boughtGameUsers.includes(this.currentUser?._id)) {
            this.canBuy = false;
            this.router.navigate(['/profile'])
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }
  
}
