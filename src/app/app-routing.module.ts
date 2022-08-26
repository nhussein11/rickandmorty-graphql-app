import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) }, { path: 'not-found', loadChildren: () => import('./components/pages/not-found/not-found/not-found.module').then(m => m.NotFoundModule) }, { path: 'character-list', loadChildren: () => import('./components/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) }, { path: 'character-details', loadChildren: () => import('./components/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) }, { path: 'about', loadChildren: () => import('./componets/pages/about/about/about.module').then(m => m.AboutModule) }, { path: 'about', loadChildren: () => import('./components/pages/about/about/about.module').then(m => m.AboutModule) }];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
