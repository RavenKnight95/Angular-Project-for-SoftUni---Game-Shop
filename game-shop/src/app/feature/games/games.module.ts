import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './game-list/game-list.component';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GameListItemDetailsComponent } from './game-list-item-details/game-list-item-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GameRoutingModule } from './games-routing.module';



@NgModule({
  declarations: [
    GamesListComponent,
    GameListItemComponent,
    AddGameComponent,
    GameListItemDetailsComponent,
    EditGameComponent,
    

  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    GameListItemComponent,
    ReactiveFormsModule,
  ]
})
export class GamesModule { }
