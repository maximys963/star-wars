import {
  planetsActionTypes,
  CHANGE_PLANET_LOAD_STATUS,
  INCREMENT_PAGE_NUMBER,
  LOAD_PLANETS_FAIL,
  UPDATE_PLANETS_COLLECTION,
  CHANGE_LOAD_MORE_STATUS,
  SET_PLANET_DETAILS,
} from './planetsActionTypes';

export function updatePlanetCollection(planetsCollection: []): planetsActionTypes {
  return ({
    type: UPDATE_PLANETS_COLLECTION,
    planetsCollection,
  });
}

export function changePlanetLoadStatus(isPlanetsLoaded: boolean): planetsActionTypes {
  return ({
    type: CHANGE_PLANET_LOAD_STATUS,
    isPlanetsLoaded,
  });
}

export function incrementPageNumber() :planetsActionTypes {
  return ({
    type: INCREMENT_PAGE_NUMBER,
  });
}

export function setPlanetLoadError(error: object) :planetsActionTypes {
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

export function setPlanetDetails(planetDetails: object) {
  return ({
    type: SET_PLANET_DETAILS,
    planetDetails,
  });
}
