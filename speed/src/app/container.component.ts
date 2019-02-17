import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";
import {GlobalSlideTypes, StoreService} from "./store.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: []
})
export class ContainerComponent implements OnInit {
  public filteredLaunches: any[] = []; // Filtro que viene de lo filtrado
  public agencies: any[] = []; // Total Agencias
  public launches: any[] = []; // Total lanzamientos
  public launchstatus; // Estado de los lanzamientos
  public missiontypes: any[] = []; // Tipo de lanzamientos

  constructor(

    public _api: ApiService,
    private global: StoreService
  ) {}

  ngOnInit() {
    console.log('container OnInit');
    this._api.getLaunches();
    this._api.getLaunchstatus();
    this._api.getAgencies();
    this._api.getMissiontypes();


    this.global
      .select$(GlobalSlideTypes.statusFilter)
      .subscribe(status => this.launchstatus = status );


    this.global
      .select$(GlobalSlideTypes.agenciesFilter)
      .subscribe(agencies => this.agencies = agencies );

    this.global
      .select$(GlobalSlideTypes.misionTypesFilter)
      .subscribe(missiontypes => this.missiontypes = missiontypes );
  }


   statusFilter(value) {
        this.global
      .select$(GlobalSlideTypes.filteredLaunches)
      .subscribe(
      launches => {
        this.launches = launches;
        this.filteredLaunches = launches.filter(f=>f.status==value);
      });

   }
   agenciesFilter(value) {
    console.log('Agencia trae', value);
    // this._api.getLaunches();
     this.global
      .select$(GlobalSlideTypes.filteredLaunches)
      .subscribe(
      launches => {
        this.launches = launches;
        console.log(this.launches);


        let rocket = this.launches
          .map((res: any) => res.rocket);
        console.log('LAS rockets SON',rocket);

        let agencies = rocket.map((res: any) => res.agencies);
        console.log('LAS AGENCIAS SON',agencies);

        let abbrev = agencies.filter(filtro => filtro.agencies.find(a =>a.id=== 96));
        console.log('LAS abbrev SON',abbrev);


        this.filteredLaunches = rocket
          .filter(filtro => filtro.agencies.find(a =>a.id=== 96));
        console.log('NOS TRAE POR FIN',this.filteredLaunches)
      });

   }
   typesFilter(value) {
    value = parseInt(value);
    this.global
      .select$(GlobalSlideTypes.filteredLaunches)
      .subscribe(
      launches => {
        this.filteredLaunches = launches
          .filter(f => f.missions.find(a =>a.type=== value));
      });
   }

}
