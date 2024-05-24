import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();

  });

  // Teste goToHomePage direcionamento para página inicial
  it('Navega para a página inicial', () => {
    component.goToHomePage();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/home', { state: { pokemon: component.pokemon } }); // Check if navigateByUrl was called with the correct arguments
  });

  // Teste goToDetailsPage direcionamento para página detalhes
  it('Navega para a página detalhes', () => {
    component.goToDetailsPage();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/pokemon-details', { state: { pokemon: component.pokemon } }); // Check if navigateByUrl was called with the correct arguments
  });

  // Teste goToFavoritesPage direcionamento para página favoritos
  it('Navega para a página favoritos', () => {
    component.goToFavoritesPage();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/pokemon-favorites', { state: { pokemon: component.pokemon } }); // Check if navigateByUrl was called with the correct arguments
  });
  
});