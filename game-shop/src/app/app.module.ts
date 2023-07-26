import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './feature/pages/pages.module';
import { GamesModule } from './feature/games/games.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    GamesModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent]
})
export class AppModule { }
