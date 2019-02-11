import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import {ApiService} from "./api.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule ],
    providers: [
    ApiService
  ],
})
export class AppRoutingModule { }
