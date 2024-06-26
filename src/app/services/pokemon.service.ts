import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API_URL = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemonData(pokemonName: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${pokemonName.toLowerCase()}`);
  }

}
