import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Variável que armazena os dados do Pokémon
  pokemon: any;

  // Injeção de dependências 
  constructor(private http: HttpClient, private router: Router) {}

  // Faz uma requisição GET para a PokeAPI para obtendo dados do Pokémon com ID 1 correspondete a (Bulbasaur)
  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/1').subscribe((data: any) => {
      this.pokemon = data;
    });
  }

  // Navega para a página detalhes do pokémon
  goToDetailsPage() {
    this.router.navigateByUrl('/pokemon-details', { state: { pokemon: this.pokemon } });
  }

  // Navega para a página inicial
  goToHomePage() {
    this.router.navigateByUrl('/home', { state: { pokemon: this.pokemon } });
  }

  // Navega para a página de favoritos
  goToFavoritesPage(){
    this.router.navigateByUrl('/pokemon-favorites');
  }
}