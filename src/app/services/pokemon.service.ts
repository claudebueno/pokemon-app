
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10000';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}