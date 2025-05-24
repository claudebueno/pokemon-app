import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  allPokemons: any[] = [];
  currentPage: number = 0;
  pokemonsPerPage: number = 20;
  navigationStep: number = 10;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(data => {
      this.allPokemons = data.results;
    });
  }

  get paginatedPokemons(): any[] {
    const start = this.currentPage * this.pokemonsPerPage;
    return this.allPokemons.slice(start, start + this.pokemonsPerPage);
  }

  get navigationPokemons(): any[] {
    const start = (this.currentPage + 1) * this.pokemonsPerPage;
    return this.allPokemons.slice(start, start + this.navigationStep);
  }

  next(): void {
    const maxPage = Math.floor(this.allPokemons.length / this.pokemonsPerPage);
    if (this.currentPage < maxPage) {
      this.currentPage++;
    }
  }

  previous(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  // ✅ méthodes à ajouter ici
  getPokemonId(pokemon: any): number {
    const urlParts = pokemon.url.split('/');
    return +urlParts[urlParts.length - 2];
  }

  getPokemonImageUrl(pokemon: any): string {
    const id = this.getPokemonId(pokemon);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}
