import {
  UPDATE_PLANETS_COLLECTION,
  CHANGE_PLANET_LOAD_STATUS,
  actionDataTypes,
} from '../actionTypes/planetDataTypes';
import { IPlanetsState } from '../interfaces/root';

const initialState: IPlanetsState = {
  planetsCollection: [],
  isPlanetsLoaded: false,
};

export const planets = (state = initialState, action: actionDataTypes): IPlanetsState => {
  switch (action.type) {
    case UPDATE_PLANETS_COLLECTION:
      return {
        ...state,
        planetsCollection: state.planetsCollection.concat(action.planetsCollection),
      };
    case CHANGE_PLANET_LOAD_STATUS:
      return {
        ...state,
        isPlanetsLoaded: action.isPlanetsLoaded,
      };
    default:
      return state;
  }
};
