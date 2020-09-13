import { Component, OnInit, DoCheck, OnDestroy  } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public movies: Pelicula[]; //Array<Pelicula>;
  public favorite: Pelicula;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.movies = this._peliculaService.getMovies();
    /*this.movies = [
      {year:2019, title: 'Scooby', image: 'https://es.web.img2.acsta.net/c_215_290/pictures/20/06/17/13/39/2095384.jpg'},
      {year: 2020, title: 'SpongeBob SquarePants', image: 'https://i.pinimg.com/736x/91/b2/09/91b20907d31c8174fe6c5334ca2479fa.jpg'}
    ];*/
  }

  ngOnInit(): void {
    console.log('OnInit');
    console.log(this._peliculaService.helloWorld());
  }

  ngDoCheck() {
    console.log('Method DoCheck');
  }

  ngOnDestroy() {
    console.log('Method OnDestroy');
  }

  showFavorite(event) {
    this.favorite = event.movie;
  }

}
