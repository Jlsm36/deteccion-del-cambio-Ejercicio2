import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GlobalActions,GlobalActionTypes} from "./store.actions";
import {globalStoreReducer} from "./store.reducer";
import {Global, globalInitialState} from "./store/models/golbal.model";


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private state: Global = {...globalInitialState};
  private filteredLaunches$ = new BehaviorSubject<any>(this.state.filteredLaunches);
  private statusFilter$ = new BehaviorSubject<any>(this.state.statusFilter);
  private agenciesFilter$ = new BehaviorSubject<any>(this.state.agenciesFilter);
  private misionTypesFilter$ = new BehaviorSubject<any>(this.state.misionTypesFilter);


  constructor() { }

  public  select$ = (slice: GlobalSlideTypes) => {
    switch ( slice) {
      case GlobalSlideTypes.filteredLaunches:
        return this.filteredLaunches$.asObservable();

        case GlobalSlideTypes.statusFilter:
        return this.statusFilter$.asObservable();

        case GlobalSlideTypes.agenciesFilter:
        return this.agenciesFilter$.asObservable();

        case GlobalSlideTypes.misionTypesFilter:
        return this.misionTypesFilter$.asObservable();
    }
  };

  public selectSnapShot = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.filteredLaunches:
        return [...this.state.filteredLaunches];

        case GlobalSlideTypes.statusFilter:
        return [...this.state.statusFilter];

        case GlobalSlideTypes.agenciesFilter:
        return [...this.state.agenciesFilter];

        case GlobalSlideTypes.misionTypesFilter:
        return [...this.state.misionTypesFilter];
    }
  };

  public dispatch = (action: GlobalActions) => {
    this.state = globalStoreReducer(this.state, action);
    switch ( action.type) {
      case GlobalActionTypes.FilteredLaunches:
        this.filteredLaunches$.next([...this.state.filteredLaunches]);
        break;
      case GlobalActionTypes.StatusFilter:
        this.statusFilter$.next([...this.state.statusFilter]);
        break;
      case GlobalActionTypes.AgenciesFilter:
        this.agenciesFilter$.next([...this.state.agenciesFilter]);
        break;
      case GlobalActionTypes.MisionTypesFilter:
        this.misionTypesFilter$.next([...this.state.misionTypesFilter])

    }
  }

}


export enum GlobalSlideTypes {
  filteredLaunches = 'filteredLaunches',
  statusFilter = 'statusFilter',
  agenciesFilter = 'agenciesFilter',
  misionTypesFilter = 'misionTypesFilter',
}

