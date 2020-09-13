import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {

  @Input() movie: Pelicula;
  @Output() markFavorite = new EventEmitter;
  constructor() { }

  ngOnInit(): void {  }

  favorite(event, movie) {
    this.markFavorite.emit({
      movie: movie
    });
  }

}
