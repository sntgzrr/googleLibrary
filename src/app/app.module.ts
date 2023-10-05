import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './library/search-result/search-result.component';
import { SearchBoxComponent } from './library/search-box/search-box.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes:Routes=[
  {path:"", redirectTo:"/library", pathMatch:"full"},
  {path:"library", component:LibraryComponent},
  {path:"favorites", component: FavoritesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    SearchResultComponent,
    SearchBoxComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
