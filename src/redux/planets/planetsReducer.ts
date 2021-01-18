import { planetsActionsConstants, planetsActionTypes } from './planetsActionTypes';
import { IPlanetsState } from './types';

export const initialState: IPlanetsState = {
  planetsCollection: [],
  isPlanetsLoaded: false,
  isNewPlanetsLoaded: false,
  isPlanetDetailsLoaded: false,
  planetsLoadError: '',
  planetDetailsError: '',
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
    case planetsActionsConstants.GET_PLANETS_COLLECTION_SUCCESS:
      return {
        ...state,
        planetsCollection: state.planetsCollection.concat(action.planetsCollection),
      };
    case planetsActionsConstants.CHANGE_PLANET_COLLECTION_LOAD_STATUS:
      return {
        ...state,
        isPlanetsLoaded: action.isPlanetsLoaded,
      };
    case planetsActionsConstants.INCREMENT_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    case planetsActionsConstants.CHANGE_LOAD_MORE_STATUS:
      return {
        ...state,
        isNewPlanetsLoaded: action.isNewPlanetsLoaded,
      };
    case planetsActionsConstants.GET_PLANET_DETAILS_SUCCESS:
      return {
        ...state,
        planetDetails: action.planetDetails,
      };
    case planetsActionsConstants.CHANGE_PLANET_LOAD_STATUS:
      return {
        ...state,
        isPlanetDetailsLoaded: action.isPlanetDetailsLoaded,
      };
    case planetsActionsConstants.GET_PLANETS_COLLECTION_FAIL:
      return {
        ...state,
        planetsLoadError: action.planetsLoadError,
      };
    case planetsActionsConstants.GET_PLANET_DETAILS_FAIL:
      return {
        ...state,
        planetDetailsError: action.planetDetailsError,
      };
    default:
      return state;
  }
};
