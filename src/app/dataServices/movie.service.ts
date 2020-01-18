import { Injectable, Output, EventEmitter } from "@angular/core";
import { IMovie } from "../models/movie";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  movieList: IMovie[] = [
    {
      id: Math.random().toString(),
      name: "Avenger 4",
      image:
        "https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg",
      discription: "dsfsdf"
    },
    {
      id: Math.random().toString(),
      name: "Avenger 5",
      image:
        "https://www.mstar.com.my/spotlight/wayang/2012/05/21/~/media/7D80459DA3A94E8197C87011294D3F51.ashx",
      discription: "dsfsdf"
    },
    {
      id: Math.random().toString(),
      name: "Avenger 6",
      image:
        "https://upload.wikimedia.org/wikipedia/ms/thumb/4/46/Mantra%28filem%29.jpg/250px-Mantra%28filem%29.jpg",
      discription: "dsfsdf"
    },
    {
      id: Math.random().toString(),
      name: "Avenger 7",
      image:
        "https://filemwayang.com/wp-content/uploads/2016/04/kalam-filem-wayang.jpg",
      discription: "dsfsdf"
    }
  ];

  @Output() movieListEmitter = new EventEmitter();

  movieStatus:boolean=false;
  @Output() statusEmitter = new EventEmitter()

  deleteMovie(id:string){
    const index = this.movieList.findIndex(item=>item.id===id);
    if(index!==-1){
      this.movieList.splice(index,1);
      this.movieListEmitter.emit(this.movieList)
    }
  }
  createMovie(movie){
    this.movieList.push(movie);
    this.movieListEmitter.emit(this.movieList)
  }
  changeStatus(status){
    this.movieStatus = status;
    this.statusEmitter.emit(this.movieStatus)
  }

  constructor() {}
}
