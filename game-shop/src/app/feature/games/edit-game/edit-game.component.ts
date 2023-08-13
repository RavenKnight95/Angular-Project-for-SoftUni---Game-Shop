import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/core/game.service';
import { IGame } from 'src/app/core/interfaces/game';


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  errorMessage: string;
  game: IGame;

  constructor(
    private gameService: GameService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const gameId = params['gameId'];
      this.gameService.loadGameById$(gameId).subscribe(game => {
        this.game = game;
        
        
        
      })
    });
  }

  submitGame(editGameForm: NgForm): void {
    console.log(editGameForm.value)
    this.activatedRoute.params.subscribe(params => {
      const gameId = params['gameId'];
      this.gameService.editGameById$(gameId, editGameForm.value).subscribe({
        next: (game) => {
          console.log(game);
          this.router.navigate(['/library']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      })
    })
  }
}
