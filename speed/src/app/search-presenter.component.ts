import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "./api.service";
import {GlobalSlideTypes, StoreService} from "./store.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-serarch-presenter',
  templateUrl: './search-presenter.component.html',
  styles: []
})
export class SearchPresenterComponent implements OnInit {
  // Emisiones al componente Padre
  @Output() public status = new  EventEmitter<any>();
  @Output() public agencie = new  EventEmitter<string>();
  @Output() public types = new  EventEmitter<any>();

  // Variables
  @Input() public agencies: any[] = [];
  @Input() public launchstatus: any[] = [];
  @Input() public missiontypes: any[] = [];
  // public agencies;
  //  public launchstatus;
  // public missiontypes: any[] = [];

  constructor(public _api: ApiService,
    ) {}

  ngOnInit() {
    console.log('presenter OnInit');

    // this.global
    //   .select$(GlobalSlideTypes.statusFilter)
    //   .subscribe(status => this.launchstatus = status );
    // this._api.getLaunchstatus();

    // this.launchstatus = this.global.selectSnapShot(GlobalSlideTypes.statusFilter);
    // // Hago la llamada para recoger los valores
    // this._api.getAgencies();

    // this._api.getMissiontypes();

    // this.global
    //   .select$(GlobalSlideTypes.agenciesFilter)
    //   .subscribe(agencies => this.agencies = agencies );
    // console.log('AAAAA', this.agencies);

    // this.launchstatus = this.global
    //     .selectSnapShot(GlobalSlideTypes.statusFilter);
    // this.global
    //   .select$(GlobalSlideTypes.statusFilter)
    //   .subscribe(status => this.launchstatus = status );
    console.log('AHORA dspues ESTO TIENE',this.launchstatus)


    // this.global
    //   .select$(GlobalSlideTypes.misionTypesFilter)
    //   .subscribe(missiontypes => this.missiontypes = missiontypes );
  }







// Recogemos los valores de los filtros

  estadoSelected(value) {

    // this.launchstatus = {...this.launchstatus};
    (<HTMLInputElement>document.getElementById('type')).value = '';
    (<HTMLInputElement>document.getElementById('agencia')).value = '';
    this.status.next(value);
  }

  typeSelected(value) {
    // this.missiontypes = {...this.missiontypes};
    (<HTMLInputElement>document.getElementById('estado')).value = '';
    (<HTMLInputElement>document.getElementById('agencia')).value = '';
    this.types.next(value);
  }

  agenciaSelected(value) {
    (<HTMLInputElement>document.getElementById('type')).value = '';
    (<HTMLInputElement>document.getElementById('estado')).value = '';
    this.agencie.next(value);
  }



}
