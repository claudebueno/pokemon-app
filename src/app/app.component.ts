/*   Composant racine */

import { Component } from '@angular/core';
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PokemonListComponent]
})
export class AppComponent {
  title = 'Pokédex Angular';
}