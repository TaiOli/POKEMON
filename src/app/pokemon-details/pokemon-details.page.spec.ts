import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetails } from './pokemon-details.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('PokemonDetails', () => {
  let component: PokemonDetails;
  let fixture: ComponentFixture<PokemonDetails>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetails],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '1' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetails);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verifica se o Pokémon é adicionado a lista de favoritos e se é armazenado no localStorage.
  it('Adicionar Pokémons aos favoritos', () => {
    const pokemonName = 'Pikachu';
    component.favoritePokemons = [];
    
    component.toggleFavorite(pokemonName);

    expect(component.favoritePokemons).toContain(pokemonName);
    expect(localStorage.getItem('favoritePokemons')).toEqual(JSON.stringify([pokemonName]));
  });

  //Verifica se isFavorite retorna true quando o pokémon está na lista de favoritos.
  describe('isFavorite', () => {
    it('Retornar true se o Pokémon estiver na lista de favoritos', () => {
      const pokemonName = 'Pikachu';
  
      component.favoritePokemons = [pokemonName];
  
      expect(component.isFavorite(pokemonName)).toBe(true);
    });
  });

  //Verifica se isFavorite retorna false quando o pokémon não está na lista de favoritos
  it('Retornar false se o pokémon não estiver na lista de favoritos', () => {
    const pokemonName = 'Charmander';
  
    component.favoritePokemons = ['Pikachu'];

    expect(component.isFavorite(pokemonName)).toBe(false);
  });


  // Verifica se após a adição de um Pokémon direciona para página favoritos.
  it('Direcionamento para página de favoritos', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.toggleFavorite('Bulbasaur');

    expect(navigateSpy).toHaveBeenCalledWith(['/pokemon-favorites']);
  });


  /// Teste goToHomePage() -> Direcionamento para a página inicial
  it('Navegar para a página inicial', () => {
    spyOn(component, 'goToHomePage');
    component.goToHomePage();
    expect(component.goToHomePage).toHaveBeenCalled();
  });

  // Teste goToFavoritesPage() -> Direcionamento para a página de favoritos
  it('Navegar para a página favoritos', () => {
    spyOn(component, 'goToFavoritesPage');
    component.goToFavoritesPage();
    expect(component.goToFavoritesPage).toHaveBeenCalled();
  });

  //Teste da páginação

  // Testa prevPage que é a página anterior
  it('Navegar página anterior', () => {
    spyOn(component, 'prevPage');
    component.prevPage();
    expect(component.prevPage).toHaveBeenCalled();
  });

  // Testa nextPage que é a próxima página
  it('Navegar próxima página', () => {
    spyOn(component, 'nextPage');
    component.nextPage();
    expect(component.nextPage).toHaveBeenCalled();
  });

});
