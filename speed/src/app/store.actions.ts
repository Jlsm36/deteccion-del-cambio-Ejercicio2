export enum GlobalActionTypes{
  StatusFilter = '[Gobal] StatusFilter',
  AgenciesFilter = '[Gobal] AgenciesFilter',
  TypesFilter = '[Gobal] TypesFilter',
  FilteredLaunches = '[Gobal] FilteredLaunches',
  MisionTypesFilter = '[Gobal] MisionTypesFilter'
  }

  export interface Action{
  readonly type: GlobalActionTypes;
  readonly payload?: any;
  }

  export class StatusFilter implements  Action{
    public type = GlobalActionTypes.StatusFilter;
    constructor(public readonly payload?: any[]) {}
  }

  export class AgenciesFilter implements  Action{
    public type = GlobalActionTypes.AgenciesFilter;
    constructor(public readonly payload?: any[]) {}
  }

  export class TypesFilter implements  Action{
    public type = GlobalActionTypes.TypesFilter;
    constructor(public readonly payload?: any[]) {}
  }

  export class FilteredLaunches implements  Action{
    public type = GlobalActionTypes.FilteredLaunches;
    constructor(public readonly payload?: any[]) {}
  }

  export class MisionTypesFilter implements  Action{
    public type = GlobalActionTypes.MisionTypesFilter;
    constructor(public readonly payload?: any[]) {}
  }

  export type GlobalActions = StatusFilter | AgenciesFilter | TypesFilter | FilteredLaunches | MisionTypesFilter;
