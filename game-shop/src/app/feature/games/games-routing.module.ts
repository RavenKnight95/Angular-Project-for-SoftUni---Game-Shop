import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { GamesListComponent } from "./game-list/game-list.component";
import { AddGameComponent } from "./add-game/add-game.component";
import { GameListItemDetailsComponent } from "./game-list-item-details/game-list-item-details.component";
import { EditGameComponent } from "./edit-game/edit-game.component";


const routes: Routes = [
  {
    path: 'library',
    component: GamesListComponent
  },
  {
    path: 'add-game',
    canActivate: [AuthGuard],
    component: AddGameComponent
  },
  {
    path: 'library/:gameId',
    component: GameListItemDetailsComponent
  },
  {
    path: 'edit/:gameId',
    canActivate: [AuthGuard],
    component: EditGameComponent
  }


];

export const GameRoutingModule = RouterModule.forChild(routes);