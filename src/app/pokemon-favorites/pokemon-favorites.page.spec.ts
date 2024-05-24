import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonFavoritesPage } from './pokemon-favorites.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonFavoritesPage', () => {
  let component: PokemonFavoritesPage;
  let fixture: ComponentFixture<PokemonFavoritesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonFavoritesPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Testa se a lista de Pokémons favoritados
  it('Exibe lista de Pokémons favoritos', () => {

    component.favoritePokemons = ['Bulbasaur', 'Ivysaur', 'Venusaur'];

    fixture.detectChanges();

    const pokemonItems = fixture.nativeElement.querySelectorAll('ion-item');

    expect(pokemonItems.length).toEqual(component.favoritePokemons.length);

    for (let i = 0; i < pokemonItems.length; i++) {
      expect(pokemonItems[i].textContent).toContain(component.favoritePokemons[i]);
    }
  });


  //Testa se a mensagem de "Nenhum Pokémon favoritado" é exibida quando não há Pokémons favoritados
  it('Exibir a mensagem "Nenhum Pokémon favorito" quando nenhum Pokémon for favorito', () => {

    component.favoritePokemons = [];

    fixture.detectChanges();

    const noFavoritesMessage = fixture.nativeElement.querySelector('ion-text');

    //Verifica se a mensagem é exibida corretamente
    expect(noFavoritesMessage.textContent).toContain('Nenhum Pokémon favoritado.');
  });
});
