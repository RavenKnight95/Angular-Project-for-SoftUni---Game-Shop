import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/game.service';
import { IGame } from 'src/app/core/interfaces/game';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gameList: IGame[];
  myGameList: IGame[];
  currentUser: IUser;
  boughtGames: IGame[];

  constructor(private userService: UserService, private gameService: GameService) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;

        this.gameService.loadGameList$().subscribe(gamelist => {
          this.gameList = gamelist;
          this.myGameList = gamelist.filter(b => b.owner === this?.currentUser._id);
          this.boughtGames = gamelist.filter(b => b.boughtGameUsers.includes(this.currentUser._id));
          console.log(this.boughtGames);
        });

      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
