import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/dataServices/movie.service';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList:IMovie[];
  status:boolean;
  constructor( private _movieService: MovieService) { }

  ngOnInit() {
    this.status=this._movieService.movieStatus;
   this.movieList = this._movieService.movieList;
   this._movieService.movieListEmitter.subscribe((res)=>{
    this.movieList = res;
   })

   this._movieService.statusEmitter.subscribe((res)=>{
     this.status=res;
   })
  }
  changeStatus(){
    if(this._movieService.movieStatus===false){
      this._movieService.changeStatus(true)
    }else{
      this._movieService.changeStatus(false)
    }
  }
}
