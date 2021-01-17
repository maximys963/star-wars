import { IPlanetDetails } from './types';
import {
  planetsActionTypes,
  CHANGE_PLANET_COLLECTION_LOAD_STATUS,
  INCREMENT_PAGE_NUMBER,
  LOAD_PLANETS_FAIL,
  UPDATE_PLANETS_COLLECTION,
  CHANGE_LOAD_MORE_STATUS,
  SET_PLANET_DETAILS,
  CHANGE_PLANET_LOAD_STATUS,
} from './planetsActionTypes';

export function updatePlanetCollection(planetsCollection: []): planetsActionTypes {
  return ({
    type: UPDATE_PLANETS_COLLECTION,
    planetsCollection,
  });
}

export function changePlanetCollectionLoadStatus(isPlanetsLoaded: boolean): planetsActionTypes {
  return ({
    type: CHANGE_PLANET_COLLECTION_LOAD_STATUS,
    isPlanetsLoaded,
  });
}

export function incrementPageNumber() :planetsActionTypes {
  return ({
    type: INCREMENT_PAGE_NUMBER,
  });
}

export function setPlanetsCollectionLoadError(error: object) :planetsActionTypes {
  return ({
    type: LOAD_PLANETS_FAIL,
    loadError: error,
  });
}

export function changeLoadMoreStatus(isNewPlanetsLoaded: boolean) {
  return ({
    type: CHANGE_LOAD_MORE_STATUS,
    isNewPlanetsLoaded,
  });
}

export function setPlanetDetails(planetDetails: IPlanetDetails) {
  return ({
    type: SET_PLANET_DETAILS,
    planetDetails,
  });
}

export function setPlanetLoadStatus(isPlanetDetailsLoaded: boolean) {
  return ({
    type: CHANGE_PLANET_LOAD_STATUS,
    isPlanetDetailsLoaded,
  });
}
