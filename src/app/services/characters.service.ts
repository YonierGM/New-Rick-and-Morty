import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Episode } from '../models/episode';
import { Character } from '../models/character';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private urlApi:string ='https://rickandmortyapi.com/api';

  private characters = 826;

  private numbers = new Array();

  constructor(
    private http: HttpClient
  ) { 

    for(let i = 0; i< this.characters; i++){
      this.numbers.push(i+1)
    } 
  }

  getAllCaracters() { 
    console.log(this.numbers)
    return this.http.get<any>(this.urlApi + '/character/['+this.numbers+']')
    .pipe(
      map( res => {
        console.log(res)
 
        return res;
      })
    );
  }

  getCaracters(page: number) { 
    console.log(this.numbers)
    return this.http.get<any>(this.urlApi + '/character/?page='+page)
    .pipe(
      map( res => {
        console.log(res)
 
        return res;
      })
    );
  }

  getCaracterByName(name: string): Observable<Character> {
    return this.http.get<Character>(this.urlApi + '/character/?name='+name)
  }

  getEpisodes(){
    return this.http.get<Episode>(this.urlApi + '/episode')
  }
}
