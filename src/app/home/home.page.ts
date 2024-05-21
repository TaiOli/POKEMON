import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemon: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/1').subscribe((data: any) => {
      this.pokemon = data;
    });
  }

  goToDetailsPage() {
    this.router.navigateByUrl('/pokemon-details', { state: { pokemon: this.pokemon } });
  }

  goToHomePage() {
    this.router.navigateByUrl('/home', { state: { pokemon: this.pokemon } });
  }

}
