// Composant liste des Pokémon

import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonService} from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.loading = true;
    this.pokemonService.getPokemonList(10, 0).subscribe({
      next: (response) => {
        response.results.forEach((pokemon: any) => {
          const id = this.extractPokemonId(pokemon.url);
          this.pokemonService.getPokemonDetail(id).subscribe({
            next: (detail: Pokemon) => {
              this.pokemons.push(detail);
            },
            error: (error) => {
              this.error = 'Erreur lors du chargement des détails';
            }
          });
        });
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement des Pokémon';
        this.loading = false;
      }
    });
  }

  private extractPokemonId(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2]);
  }
}
