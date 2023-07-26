import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { GameListItemDetailsComponent } from './feature/games/game-list-item-details/game-list-item-details.component';
import { GameListComponent } from './feature/games/game-list/game-list.component';
import { EditGameComponent } from './feature/games/edit-game/edit-game.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    GameListItemDetailsComponent,
    GameListComponent,
    EditGameComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent]
})
export class AppModule { }
