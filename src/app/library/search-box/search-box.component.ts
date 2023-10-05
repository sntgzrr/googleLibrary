import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, switchAll, tap } from 'rxjs/operators';
import { BookDetail } from 'src/model/book-detail.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit{
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<BookDetail[]>();

  constructor(private book: ApiService, private el: ElementRef){}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e:any) => e.target.value),
      filter(text => text.length > 1),
      debounceTime(500),
      tap(() => this.loading.emit(true)),
      map((query: string) => this.book.getBooks(query)),
      switchAll())
      .subscribe(
        results => {
          this.loading.emit(false);
          this.results.emit(results);
        },
        err => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}
