import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PokemonDetails } from './pokemon-details/pokemon-details.page';
import { PokemonFavoritesPage } from './pokemon-favorites/pokemon-favorites.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pokemon-details',
    component: PokemonDetails
  },
  {
    path: 'pokemon-favorites',
    component: PokemonFavoritesPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pokemon-favorites',
    loadChildren: () => import('./pokemon-favorites/pokemon-favorites.module').then( m => m.PokemonFavoritesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
