import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.page.html',
  styleUrls: ['./pokemon-favorites.page.scss'],
})
export class PokemonFavoritesPage {

  // Array para armazenar os Pokémon favoritos
  favoritePokemons: any[] = [];

  constructor(private router: Router) {
    //Verifica se existem Pokémon favoritos armazenados localmente e os carrega
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      this.favoritePokemons = JSON.parse(storedFavorites);
    }
  }

  //Atualiza a lista de Pokémon favoritos
  ionViewWillEnter() {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      this.favoritePokemons = JSON.parse(storedFavorites);
    }
  }

  // Adiciona um Pokémon à lista de favoritos se ele ainda não estiver inserido
  addFavorite(pokemonName: string) {
    if (!this.favoritePokemons.includes(pokemonName)) {
      this.favoritePokemons.push(pokemonName);
      localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
    }
  }

  // Remove um Pokémon da lista de favoritos
  removeFavorite(pokemonName: string) {
    this.favoritePokemons = this.favoritePokemons.filter(p => p !== pokemonName);
    localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
  }

  //Direciona para página inicial
  goToHomePage() {
    this.router.navigate(['/home']);
  }

  //Direciona para página de favoritos
  goToFavoritesPage() {
    this.router.navigate(['/pokemon-favorites']);
  }

}