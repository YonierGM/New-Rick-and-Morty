import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public total: number = 0;
  public page: any = 0;

  public characters: any = [];
  public episodes: any = [];

  public spinner: boolean = false;

  constructor(
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.cargarEpisodes();
    this.cargarCaracter();
  }

  onPageChange(number: number) {
    console.log(`pageChange(${number})`);
    this.page = number;

    this.cargarCaracter();
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

  cargarCaracter() {
    this.spinner = true;
    this.characterService.getCaracter(this.page).subscribe({
      next: (v) => {

        this.characters = v.results;
        this.total = v.info.count;

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
}