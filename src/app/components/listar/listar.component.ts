import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public total: number = 0;
  public page: any = 0;

  public characters: any[] = [];
  public charactersCopy: any = [];
  public episodes: any = [];
  
  public spinner: boolean = false;
  public filtro_valor = '';

  name = '';
  
  constructor(
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.cargarEpisodes();
    this.cargarCaracters();
  }

  onPageChange(number: number) {
    console.log(`pageChange(${number})`);

    this.page = number;
    this.cargarAllCaracter();

  }

  cargarEpisodes() {

    this.characterService.getEpisodes().subscribe({

      next: (episodes) => {

        this.episodes = episodes.results;

      },
      error: (e) => {
        console.error(e)
      },

      complete: () => {
        console.info('complete')
      }
    });

  }

  cargarCaracters() {
    this.spinner = true;
    this.characterService.getCaracters(this.page)

    .subscribe({
      next: (v) => {

        this.characters = v.results;
        this.total = v.info.count;
        console.log(this.characters)

      },

      error: (e) => {
        console.error(e)
      },

      complete: () => {
        console.info('complete')
        this.spinner = false; 
      }
    });
  }

  cargarAllCaracter() {
    this.spinner = true;
    this.characterService.getAllCaracters()

    .subscribe({
      next: (v) => {

        this.characters = v;
        console.log(this.characters)

      },

      error: (e) => {
        console.error(e)
      },

      complete: () => {
        console.info('complete')
        this.spinner = false; 
      }
    });
  }

  public buscando: boolean = false;
  filter(e: any){
    this.charactersCopy = this.characters;
    
    if(this.name !=''){
      this.buscando = true;
    }else{
      this.buscando = false;
    }
    const search: string = e.target.value;
    console.log({search})
    //Hacer filtro
    this.characters = this.charactersCopy?.filter(({name}:any) => {
      console.log(this.charactersCopy)
      return  name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}