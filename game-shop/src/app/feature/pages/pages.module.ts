import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesModule } from '../games/games.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    GamesModule,
    FormsModule,
    RouterModule,
  ]
})
export class PagesModule { }
