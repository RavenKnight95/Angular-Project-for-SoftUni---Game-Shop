import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/core/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  errorMessage: string;

  constructor(
    private gameService: GameService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
