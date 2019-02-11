import { Component, OnInit } from '@angular/core';
import {filter, mergeMap} from 'rxjs/operators';
// import {ApiService} from "./api.service";
import * as dataJSON from '../assets/data/launches.json';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: []
})
export class ContainerComponent implements OnInit {
  public filteredLaunches: any[] = [];
  public agencies: any[] = [];
  public launches: any[] = [];
  public launchstatus: any[] = [];
  public missiontypes: any[] = [];

  constructor(
    public _api: ApiService
  ) {
    // setInterval(_ => console.log(this.filteredLaunches), 5000)
  }

  ngOnInit() {
     this._api.getAgencies()
      .subscribe(
      agencies => {
        this.agencies = agencies;
      });

    this._api.getLaunchstatus()
      .subscribe(
      launchstatus => {
        this.launchstatus = launchstatus;
      });

    this._api.getMissiontypes()
      .subscribe(
      missiontypes => {
        this.missiontypes = missiontypes;
        });

  }

  // ver () {
  //   this._api.getLaunches()
  //     .subscribe(
  //     launches => {
  //       this.launches = launches;
  //       this.filteredLaunches = launches
  //         // Buscar por tipo (se busca dentro de tipo misiones
  //         .filter(f => f.missions.find(a =>a.type=== 3));
  //
  //         // Busca por estado lanzamientos
  //         // ok .filter(f=>f.status==2);
  //
  //
  //         // .filter(f => f.rocket.name.includes('Vostok'));
  //         // .filter(f => f.rocket.name.includes('Vostok'));
  //       console.log('El Filtro:', this.filteredLaunches);
  //       console.log('Lanzamientos:', this.launches);
  //     });
  //  }

   statusFilter(value) {
    console.log('el tipo es:', typeof  value);
    this._api.getLaunches()
      .subscribe(
      launches => {
        this.launches = launches;
        this.filteredLaunches = launches.filter(f=>f.status==value);
          // Buscar por tipo (se busca dentro de tipo misiones
          // .filter(f => f.missions.find(a =>a.type=== 3));

          // Busca por estado lanzamientos



          // .filter(f => f.rocket.name.includes('Vostok'));
          // .filter(f => f.rocket.name.includes('Vostok'));
        console.log('El Filtro:', this.filteredLaunches);
        console.log('Lanzamientos:', this.launches);
      });

   }
   agenciesFilter(value) {
    this._api.getLaunches()
      .subscribe(
      launches => {
        this.launches = launches;
        this.filteredLaunches = launches.filter(f=>f.status==value);
          // Buscar por tipo (se busca dentro de tipo misiones
          // .filter(f => f.missions.find(a =>a.type=== 3));

          // Busca por estado lanzamientos



          // .filter(f => f.rocket.name.includes('Vostok'));
          // .filter(f => f.rocket.name.includes('Vostok'));
        console.log('El Filtro:', this.filteredLaunches);
        console.log('Lanzamientos:', this.launches);
      });

   }
   typesFilter(value) {
    // En este caso filteredLaunches lo cambiamos de estado
     // Por tal motivo no hace falta poner:
     // this.filteredLaunches = {...this.filteredLaunches}
    value = parseInt(value);
    this._api.getLaunches()
      .subscribe(
      launches => {
        this.filteredLaunches = launches.filter(f => f.missions.find(a =>a.type=== value));
      });
   }


    // );
    // console.log(this.filteredLaunches);
    // this.filteredLaunches = this._api.getLaunches.filter(
    //   l =>
    //     l.name.toLowerCase().includes(search) ||
    //     l.location.name.toLowerCase().includes(search)
    // )



}
