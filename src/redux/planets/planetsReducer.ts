import {
  planetsActionTypes,
  CHANGE_PLANET_COLLECTION_LOAD_STATUS,
  INCREMENT_PAGE_NUMBER,
  UPDATE_PLANETS_COLLECTION,
  CHANGE_LOAD_MORE_STATUS,
  SET_PLANET_DETAILS,
  CHANGE_PLANET_LOAD_STATUS,
} from './planetsActionTypes';
import { IPlanetsState } from './types';

const initialState: IPlanetsState = {
  planetsCollection: [],
  isPlanetsLoaded: false,
  isNewPlanetsLoaded: false,
  isPlanetDetailsLoaded: false,
  pageNumber: 0,
  planetDetails: {
    name: '',
    rotation_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    population: '',
    residents: [{
      name: '',
      height: '',
      mass: '',
      gender: '',
    }],
  },
};

export const planetsReducer = (state = initialState, action: planetsActionTypes): IPlanetsState => {
  switch (action.type) {
    case UPDATE_PLANETS_COLLECTION:
      return {
        ...state,
        planetsCollection: state.planetsCollection.concat(action.planetsCollection),
      };
    case CHANGE_PLANET_COLLECTION_LOAD_STATUS:
      return {
        ...state,
        isPlanetsLoaded: action.isPlanetsLoaded,
      };
    case INCREMENT_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    case CHANGE_LOAD_MORE_STATUS:
      return {
        ...state,
        isNewPlanetsLoaded: action.isNewPlanetsLoaded,
      };
    case SET_PLANET_DETAILS:
      return {
        ...state,
        planetDetails: action.planetDetails,
      };
    case CHANGE_PLANET_LOAD_STATUS:
      return {
        ...state,
        isPlanetDetailsLoaded: action.isPlanetDetailsLoaded,
      };
    default:
      return state;
  }
};
