import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API_URL = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

}
