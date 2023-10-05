import { Injectable } from '@angular/core';
import { BookDetail } from 'src/model/book-detail.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoritos: Favorito[] = [];

  agregarFavorito(book: BookDetail) {
    this.favoritos.push(new Favorito(book));
  }

  obtenerFavoritos() {
    return this.favoritos;
  }
}

export class Favorito {
  constructor(public book: BookDetail) {}
  title = this.book.title
  img = this.book.imageLinks
  link = this.book.infoLink
}

