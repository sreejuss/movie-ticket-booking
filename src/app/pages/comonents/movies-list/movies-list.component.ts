import { Component } from '@angular/core';
import { MOVIES_LIST } from '../../constants/movies-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {

  movies: any[] = [];


  ngOnInit() {
    this.movies = MOVIES_LIST
  }
}
