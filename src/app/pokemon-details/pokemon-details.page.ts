import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss']
})

export class PokemonDetails {

  // Armazena os detalhes dos Pokémons
  pokemonData: any[] = [];
  // Página atual do Pokémon sendo exibido
  currentPage: number = 0;

  //Array de favoritos
  favoritePokemons: string[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    //Carrega os pokémons favoritos armazenamento local
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      this.favoritePokemons = JSON.parse(storedFavorites);
    }

    this.loadPokemonDetails();
  }

  //Carregar os detalhes dos Pokémons da API PokeAPI e preenche o array pokemonData
  loadPokemonDetails() {
    const pokemonIds = [1, 2, 3];
    pokemonIds.forEach((id, index) => {
      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((data) => {
        let description: string;
        switch (id) {
          case 1: // Bulbasaur
            description = 'Por algum tempo após seu nascimento, ele utiliza os nutrientes que estão contidos na semente em seu dorso para crescer.';
            break;
          case 2: // Ivysaur
            description = 'Quanto mais luz solar Ivysaur toma banho, mais força surge dentro dele, permitindo que o botão em suas costas cresça.';
            break;
          case 3: // Venusaur
            description = 'Enquanto se aquece ao sol, pode converter a luz em energia. Como resultado, é mais potente no verão.';

            break;
          default:
            description = 'Descrição do Pokémon...';
        }

        this.pokemonData[index] = {
          name: data.name,
          number: `#${data.id}`,
          description: description,
          stats: {
            attack: data.stats[0].base_stat,
            defense: data.stats[1].base_stat,
            speed: data.stats[5].base_stat,
            height: `${data.height / 10}m`,
            weight: `${data.weight / 10}kg`,
            category: 'Semente',
            abilities: ['Crescer demais']
          },
          types: ['Grama', 'Tóxico'],
          weaknesses: ['Fogo', 'Gelo', 'Vôo', 'Psíquico'],
          image: data.sprites.other['official-artwork'].front_default,
          isFavorite: false
        };
      });
    });
  }

  // Verifica se pokémon está na lista de favoritos
  isFavorite(pokemonName: string): boolean {
    return this.favoritePokemons.includes(pokemonName);
  }

  // Atualiza a lista de pokémons favoritos ao entrar na página
  ionViewWillEnter() {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      this.favoritePokemons = JSON.parse(storedFavorites);
    }
  }

  // Navega para a página inicial
  goToHomePage() {
    this.router.navigateByUrl('/');
  }

  // Navega para a página de favoritos
  goToFavoritesPage() {
    this.router.navigateByUrl('/pokemon-favorites');
  }

  // Avança para a próxima página
  nextPage() {
    this.currentPage = (this.currentPage + 1) % this.pokemonData.length;
  }

  // Retorna para a página anterior
  prevPage() {
    this.currentPage = (this.currentPage - 1 + this.pokemonData.length) % this.pokemonData.length;
  }

  // Adiciona ou remove um pokémon dos favoritos 
  toggleFavorite(pokemonName: string) {
    if (!this.favoritePokemons.includes(pokemonName)) {
      this.favoritePokemons.push(pokemonName);
      localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
    }
    this.router.navigate(['/pokemon-favorites']);
  }
}