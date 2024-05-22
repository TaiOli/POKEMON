import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetails } from './pokemon-details.page';

describe('PokemonDetails', () => {
  let component: PokemonDetails;
  let fixture: ComponentFixture<PokemonDetails>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
