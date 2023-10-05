import { Component} from '@angular/core';
import { BookDetail } from 'src/model/book-detail.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent{
  results: BookDetail[] | undefined;
  loading: boolean | undefined;
  message = "";

  constructor(){}
  
  updateResults(results: BookDetail[]): void{
    this.results = results;
    if(this.results.length === 0){
      this.message = 'No se encontró ningún libro.';
    }else {
      this.message = 'Top 10: ';
    }
  }
}
