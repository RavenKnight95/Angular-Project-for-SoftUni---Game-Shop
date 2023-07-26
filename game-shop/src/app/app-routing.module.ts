import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from "./feature/pages/not-found-page/not-found-page.component";
import { HomePageComponent } from './feature/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }

];

export const AppRoutingModule = RouterModule.forRoot(routes);
