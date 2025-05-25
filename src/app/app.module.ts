/* Module principal de l'application */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';  // Importer CommonModule
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    PokemonListComponent  // Importer le composant
  ],
  providers: []
})
export class AppModule {
}
