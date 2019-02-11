import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "./api.service";

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

  constructor(public _api: ApiService) {

  }

  ngOnInit() {
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
