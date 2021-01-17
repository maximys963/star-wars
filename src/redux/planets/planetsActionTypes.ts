import { IPlanetDetails } from './types';

export const UPDATE_PLANETS_COLLECTION = 'UPDATE_PLANETS_COLLECTION';
export const LOAD_PLANETS_FAIL = 'LOAD_PLANETS_FAIL';
export const CHANGE_PLANET_COLLECTION_LOAD_STATUS = 'CHANGE_PLANET_COLLECTION_LOAD_STATUS';
export const CHANGE_PLANET_LOAD_STATUS = 'CHANGE_PLANET_LOAD_STATUS';
export const CHANGE_LOAD_MORE_STATUS = 'CHANGE_LOAD_MORE_STATUS';
export const INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER';
export const SET_PLANET_DETAILS = 'SET_PLANET_DETAILS';

interface IGetPlanetCollectionAction {
    type: typeof UPDATE_PLANETS_COLLECTION,
    planetsCollection: []
}

interface ISetPlanetLoadedAction {
    type: typeof CHANGE_PLANET_COLLECTION_LOAD_STATUS,
    isPlanetsLoaded: boolean
}

interface IIncrementPageAction {
    type: typeof INCREMENT_PAGE_NUMBER,
}

interface IPlantsLoadFailAction {
    type: typeof LOAD_PLANETS_FAIL,
    loadError: object
}

interface ISetPlanetLoadMoreAction {
    type: typeof CHANGE_LOAD_MORE_STATUS,
    isNewPlanetsLoaded: boolean
}

interface ISetPlantDetails {
    type: typeof SET_PLANET_DETAILS,
    planetDetails: IPlanetDetails
}

interface ISetPlanetLoadStatus {
    type: typeof CHANGE_PLANET_LOAD_STATUS,
    isPlanetDetailsLoaded: boolean
}

export type planetsActionTypes = IGetPlanetCollectionAction
                              | ISetPlanetLoadedAction
                              | IIncrementPageAction
                              | IPlantsLoadFailAction
                              | ISetPlanetLoadMoreAction
                              | ISetPlantDetails
                              | ISetPlanetLoadStatus
