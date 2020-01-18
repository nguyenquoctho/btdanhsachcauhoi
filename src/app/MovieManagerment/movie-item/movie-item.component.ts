import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MovieService } from 'src/app/dataServices/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:IMovie;
  constructor (private _movieService:MovieService){ }

  ngOnInit() {
  }

  handleDeleteMovie(){
    this._movieService.deleteMovie(this.movie.id)
  }
}
