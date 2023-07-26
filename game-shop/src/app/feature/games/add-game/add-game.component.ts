import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/core/game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  errorMessage: string;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  submitGame(addGameForm: NgForm): void {
    this.gameService.addGame$(addGameForm.value).subscribe({
      next: (game) => {
        console.log(game);
        this.router.navigate(['/library']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }

}
