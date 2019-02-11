import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container.component';
import {ApiService} from "./api.service";
import { SearchPresenterComponent } from './search-presenter.component';
import { FilterPresenterComponent } from './filter-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchPresenterComponent,
    FilterPresenterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
