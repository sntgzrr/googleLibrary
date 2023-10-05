import { Component, OnInit } from '@angular/core';
import { BookDetail } from 'src/model/book-detail.model';
import { FavoritesService, Favorito } from 'src/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  book: BookDetail = new BookDetail;
  favs: Favorito [] = [];
  key: any;

  constructor(private favoritosService: FavoritesService) {}

  ngOnInit(): void {
      this.favs = this.favoritosService.obtenerFavoritos();
      console.log(this.favs);
  }
}
