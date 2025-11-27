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
  currentPage: number = 1;
  private itemsPerPage: number = 16;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
  this.loading = true;
  this.pokemons = [];

  // Générer 16 IDs aléatoires entre 1 et 1025
  const randomIds = this.generateRandomPokemonIds(16);

  randomIds.forEach(id => {
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
}

  canPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  canNextPage(): boolean {
    return this.pokemons.length === this.itemsPerPage;
  }

  previousPage(): void {
    if (this.canPreviousPage()) {
      this.currentPage--;
      this.loadPokemons();
    }
  }

  nextPage(): void {
    if (this.canNextPage()) {
      this.currentPage++;
      this.loadPokemons();
    }
  }

  private generateRandomPokemonIds(count: number): number[] {
    const ids: number[] = [];
    const used = new Set<number>();

    while (ids.length < count) {
      const id = Math.floor(Math.random() * 1025) + 1;
      if (!used.has(id)) {
        ids.push(id);
        used.add(id);
      }
    }
    return ids;
  }
}
