import { Component, OnInit } from '@angular/core';
import { MoviesList } from './moviesList';
import { Movie } from "./moviesModel";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] =[];
  ngOnInit(): void {
    this.movies = MoviesList;
    console.log(this.movies)
  }


}
