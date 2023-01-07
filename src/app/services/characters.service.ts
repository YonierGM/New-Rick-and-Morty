import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Episode } from '../models/episode';
import { Character } from '../models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private urlApi:string ='https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
  ) { }

  getCaracter(page: number): Observable<Character> {
    return this.http.get<Character>(this.urlApi + '/character/?page=' + page)
  }

  getEpisodes(){
    return this.http.get<Episode>(this.urlApi + '/episode')
  }
}
