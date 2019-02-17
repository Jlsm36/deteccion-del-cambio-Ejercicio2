import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map, filter, tap, flatMap, mergeMap} from 'rxjs/operators';
import {AgenciesFilter, FilteredLaunches, MisionTypesFilter, StatusFilter} from "./store.actions";
import {StoreService} from "./store.service";



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  constructor(
    public http: HttpClient, private global: StoreService
  ) {
  }
  public getLaunches = ()=>
    this.http
      .get('./assets/data/launches.json')
      .pipe(
        map((res: any) => res.launches))
      .subscribe(launches => {
          this.global.dispatch(new FilteredLaunches(launches));
        });

  public getAgencies = () =>
    this.http
      .get('./assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies))
      .subscribe(agencies => {
          this.global.dispatch(new AgenciesFilter(agencies));
        });

  public getLaunchstatus = () =>
    this.http
      .get('./assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types))
      .subscribe(types => {
          this.global.dispatch(new StatusFilter(types));
        });

  public getMissiontypes = () =>
    this.http
      .get('./assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))
      .subscribe(types => {
          this.global.dispatch(new MisionTypesFilter(types));
        });

}

