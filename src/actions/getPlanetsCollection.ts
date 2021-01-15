import { actionDataTypes, CHANGE_PLANET_LOAD_STATUS, UPDATE_PLANETS_COLLECTION } from '../actionTypes/planetDataTypes';

export function updatePlanetCollection(planetsCollection: []): actionDataTypes {
  return ({
    type: UPDATE_PLANETS_COLLECTION,
    planetsCollection,
  });
}

export function setPlanetIsLoaded(isLoaded: boolean): actionDataTypes {
  return ({
    type: CHANGE_PLANET_LOAD_STATUS,
    isPlanetsLoaded: isLoaded,
  });
}
