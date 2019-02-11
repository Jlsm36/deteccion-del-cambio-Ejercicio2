import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
// // import launches from '../assets/data/launches.json';
import * as dataJSON from '../assets/data/launches.json';
import {map, filter, tap, flatMap, mergeMap} from 'rxjs/operators';

// import {get} from "http";
// import {Observable} from "rxjs";
// declare module "*.json" {
// const value: any;
// export default value;
// }import * as data from '../assets/data/launches.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  constructor(
    public http: HttpClient
  ) {}
    // console.log((<any>dataJSON.launches[0] ));
    // this.getJSON().subscribe(data => {
    //   console.log(data)
    //  });
  public getLaunches = (): Observable<any[]> =>
    this.http
      .get('./assets/data/launches.json')
      .pipe(
        map((res: any) => res.launches),
        );

  public getAgencies = (): Observable<any[]> =>
    this.http
      .get('./assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies));

  public getLaunchstatus = (): Observable<any[]> =>
    this.http
      .get('./assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types));

  public getMissiontypes = (): Observable<any[]> =>
    this.http
      .get('./assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types));





  // getLaunches() {
  //
  //   this.http.get('./assets/data/launches.json')
  //     .map((res: any) => res.launches.name);
  // }

//   getLaunches = () {
//     this.http
//       .get('http://localhost:4200/assets/data/launches.json')
//       .pipe(map((res: any) => res.launches));
// }





}
  //
  // // public getLaunches = (): Observable<any[]> =>
  // //   this.http
  // //     .get( 'http://localhost:4200/assets/data/launches.json')
  // //     .pipe(map((res: any) => res.launches));
  // getLaunches() {
  //    // return this.http.get("../assets/data/launches.json")
  //   }
  //
  //

  //

// }
