import { IPlanetDetails, IPlanetCollectionItem } from './types';
import {
  planetsActionTypes,
  planetsActionsConstants,
} from './planetsActionTypes';

export function updatePlanetCollection(planetsCollection: IPlanetCollectionItem[]): planetsActionTypes {
  return ({
    type: planetsActionsConstants.GET_PLANETS_COLLECTION_SUCCESS,
    planetsCollection,
  });
}

export function changePlanetCollectionLoadStatus(isPlanetsLoaded: boolean): planetsActionTypes {
  return ({
    type: planetsActionsConstants.CHANGE_PLANET_COLLECTION_LOAD_STATUS,
    isPlanetsLoaded,
  });
}

export function incrementPageNumber() :planetsActionTypes {
  return ({
    type: planetsActionsConstants.INCREMENT_PAGE_NUMBER,
  });
}

export function setPlanetsCollectionLoadError(planetsLoadError: string) :planetsActionTypes {
  return ({
    type: planetsActionsConstants.GET_PLANETS_COLLECTION_FAIL,
    planetsLoadError,
  });
}

export function changeLoadMoreStatus(isNewPlanetsLoaded: boolean) {
  return ({
    type: planetsActionsConstants.CHANGE_LOAD_MORE_STATUS,
    isNewPlanetsLoaded,
  });
}

export function setPlanetDetails(planetDetails: IPlanetDetails) {
  return ({
    type: planetsActionsConstants.GET_PLANET_DETAILS_SUCCESS,
    planetDetails,
  });
}

export function setPlanetLoadStatus(isPlanetDetailsLoaded: boolean) {
  return ({
    type: planetsActionsConstants.CHANGE_PLANET_LOAD_STATUS,
    isPlanetDetailsLoaded,
  });
}

export function setPlanetsDetailsLoadError(planetDetailsError: string) {
  return ({
    type: planetsActionsConstants.GET_PLANET_DETAILS_FAIL,
    planetDetailsError,
  });
}
