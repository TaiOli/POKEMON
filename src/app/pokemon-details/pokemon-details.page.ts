import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss']
})

export class PokemonDetails {

  // Armazena os detalhes dos Pokémons
  pokemon: any[] = [];
  // Página atual do Pokémon sendo exibido
  currentPage: number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  // Dados dos Pokémons
  pokemonData = [
    {
      name: 'Bulbasaur',
      number: '#001',
      description: 'Por algum tempo após seu nascimento, ele utiliza os nutrientes que estão contidos na semente em seu dorso para crescer.',
      stats: {
        attack: 49,
        defense: 49,
        speed: 45,
        height: '0,7m',
        weight: '6,9kg',
        category: 'Semente',
        abilities: 'Crescer demais'
      },
      types: ['Grama', 'Tóxico'],
      weaknesses: ['Fogo', 'Gelo', 'Vôo', 'Psíquico'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
      name: 'Ivysaur',
      number: '#0002',
      description: 'Quanto mais luz solar Ivysaur toma banho, mais força surge dentro dele, permitindo que o botão em suas costas cresça.',
      stats: {
        attack: 62,
        defense: 63,
        speed: 60,
        height: '1,0m',
        weight: '13,0kg',
        category: 'Semente',
        abilities: 'Crescer demais'
      },
      types: ['Grama', 'Tóxico'],
      weaknesses: ['Fogo', 'Gelo', 'Vôo', 'Psíquico'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
    },
    {
      name: 'Venusaur',
      number: '#0003',
      description: 'Enquanto se aquece ao sol, pode converter a luz em energia. Como resultado, é mais potente no verão.',
      stats: {
        attack: 82,
        defense: 83,
        speed: 80,
        height: '2,0m',
        weight: '100,0kg',
        category: 'Semente',
        abilities: 'Crescer demais'
      },
      types: ['Grama', 'Tóxico'],
      weaknesses: ['Fogo', 'Gelo', 'Vôo', 'Psíquico'],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
    }
  ];

  // Navega para a página inicial
  goToHomePage() {
    this.router.navigateByUrl('/home', { state: { pokemon: this.pokemon } });
  }

  // Avança para a próxima página
  nextPage() {
    this.currentPage = (this.currentPage + 1) % this.pokemonData.length;
  }

  // Retorna para a página anterior
  prevPage() {
    this.currentPage = (this.currentPage - 1 + this.pokemonData.length) % this.pokemonData.length;
  }

}
