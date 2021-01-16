import {
  actionDataTypes,
  CHANGE_PLANET_LOAD_STATUS,
  INCREMENT_PAGE_NUMBER,
  LOAD_PLANETS_FAIL,
  UPDATE_PLANETS_COLLECTION,
  CHANGE_LOAD_MORE_STATUS,
} from '../actionTypes/planetTypes';

export function updatePlanetCollection(planetsCollection: []): actionDataTypes {
  return ({
    type: UPDATE_PLANETS_COLLECTION,
    planetsCollection,
  });
}

export function changePlanetLoadStatus(isPlanetsLoaded: boolean): actionDataTypes {
  return ({
    type: CHANGE_PLANET_LOAD_STATUS,
    isPlanetsLoaded,
  });
}

export function incrementPageNumber() :actionDataTypes {
  return ({
    type: INCREMENT_PAGE_NUMBER,
  });
}

export function setPlanetLoadError(error: object) :actionDataTypes {
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
