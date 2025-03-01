/* Module principal de l'application */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [],  // Aucun composant déclaré car tous sont standalone
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,  // Import du composant standalone
    PokemonListComponent  // Import du composant standalone
  ],
  providers: [],
  bootstrap: [AppComponent]  // AppComponent reste le composant de démarrage
})
export class AppModule { } }