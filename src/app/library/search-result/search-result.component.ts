import { Component, Input, OnInit } from '@angular/core';
import { BookDetail } from 'src/model/book-detail.model';
import { FavoritesService } from 'src/services/favorites.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit{
  @Input()
  result: BookDetail = new BookDetail;

  constructor(private favoritosService: FavoritesService) {}

  ngOnInit(): void {
      
  }
  agregarAFavoritos() {
    this.favoritosService.agregarFavorito(this.result);
  }
}