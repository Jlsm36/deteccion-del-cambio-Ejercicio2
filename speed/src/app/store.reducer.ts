import {Global, globalInitialState} from "./store/models/golbal.model";
import {GlobalActions, GlobalActionTypes} from "./store.actions";


export function globalStoreReducer(
  state = globalInitialState,
  action: GlobalActions
): Global {
  const result = { ...state };
  switch (action.type) {
    case GlobalActionTypes.StatusFilter:
      result.statusFilter = action.payload;
      break;
      case GlobalActionTypes.FilteredLaunches:
      result.filteredLaunches = action.payload;
      break;
      case GlobalActionTypes.AgenciesFilter:
      result.agenciesFilter = action.payload;
      break;
      case GlobalActionTypes.MisionTypesFilter:
      result.misionTypesFilter = action.payload;
      break;
  }
  return result;

}
