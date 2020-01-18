import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/dataServices/movie.service';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  }
  handleSave(name:string,image:string,description:string){
    const movie = {
      name,
      image,
      discription:description
    }
    this._movieService.createMovie(movie)
  }
}
