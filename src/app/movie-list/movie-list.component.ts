import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesList } from './moviesList';
import { Movie } from "./moviesModel";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit,OnDestroy {
  movies: Movie[] =[];
  currentIndx:number =0;
  intervalId:any;
  constructor(private router:Router,private aRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.movies = MoviesList;
    console.log(this.movies)
    this.autoScroll();
  }

  bookMovie(movie:Movie){
    console.log(movie)
    this.router.navigate(['/movieTicket',movie.id])
  }

  autoScroll(){
    this.intervalId = setInterval(()=>{
      this.nextSlide()
    },3000)
  }

  nextSlide(){
    this.currentIndx = (this.currentIndx+1)%this.movies.length
  }

  previousSlide(){
    this.currentIndx = (this.currentIndx-1)%this.movies.length
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
