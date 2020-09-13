import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()

export class PeliculaService {
    public movies: Pelicula[];

    constructor() {
        this.movies = [
            new Pelicula("SpongeBob SquarePants", "https://i.pinimg.com/736x/91/b2/09/91b20907d31c8174fe6c5334ca2479fa.jpg", 2020),
            new Pelicula('Scooby', 'https://es.web.img2.acsta.net/c_215_290/pictures/20/06/17/13/39/2095384.jpg', 2019),
            new Pelicula('Bob Esponja', 'https://images-na.ssl-images-amazon.com/images/I/51HeWtJZsFL._SX344_BO1,204,203,200_.jpg', 2020)
            ];
    }

    helloWorld() {
        return 'Hello World since movie service';
    }

    getMovies() {
        return this.movies;
    }
}