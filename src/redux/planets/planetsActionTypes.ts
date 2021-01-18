import { IPlanetDetails, IPlanetCollectionItem } from './types';

export enum planetsActionsConstants {
    GET_PLANETS_COLLECTION_SUCCESS = 'GET_PLANETS_COLLECTION_SUCCESS',
    GET_PLANETS_COLLECTION_FAIL = 'GET_PLANETS_COLLECTION_FAIL',
    GET_PLANET_DETAILS_FAIL = 'GET_PLANET_DETAILS_FAIL',
    CHANGE_PLANET_COLLECTION_LOAD_STATUS = 'CHANGE_PLANET_COLLECTION_LOAD_STATUS',
    CHANGE_PLANET_LOAD_STATUS = 'CHANGE_PLANET_LOAD_STATUS',
    CHANGE_LOAD_MORE_STATUS = 'CHANGE_LOAD_MORE_STATUS',
    INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER',
    GET_PLANET_DETAILS_SUCCESS = 'GET_PLANET_DETAILS_SUCCESS',
}

interface IGetPlanetCollectionAction {
    type: typeof planetsActionsConstants.GET_PLANETS_COLLECTION_SUCCESS,
    planetsCollection: IPlanetCollectionItem[],
}

interface ISetPlanetLoadedAction {
    type: typeof planetsActionsConstants.CHANGE_PLANET_COLLECTION_LOAD_STATUS,
    isPlanetsLoaded: boolean
}

interface IIncrementPageAction {
    type: typeof planetsActionsConstants.INCREMENT_PAGE_NUMBER,
}

interface IPlantsLoadFailAction {
    type: typeof planetsActionsConstants.GET_PLANETS_COLLECTION_FAIL,
    planetsLoadError: string
}

interface IPlanetDetailsFailAction {
    type: typeof planetsActionsConstants.GET_PLANET_DETAILS_FAIL,
    planetDetailsError: string
}

interface ISetPlanetLoadMoreAction {
    type: typeof planetsActionsConstants.CHANGE_LOAD_MORE_STATUS,
    isNewPlanetsLoaded: boolean
}

interface ISetPlantDetails {
    type: typeof planetsActionsConstants.GET_PLANET_DETAILS_SUCCESS,
    planetDetails: IPlanetDetails
}

interface ISetPlanetLoadStatus {
    type: typeof planetsActionsConstants.CHANGE_PLANET_LOAD_STATUS,
    isPlanetDetailsLoaded: boolean
}

export type planetsActionTypes = IGetPlanetCollectionAction
                              | ISetPlanetLoadedAction
                              | IIncrementPageAction
                              | IPlantsLoadFailAction
                              | ISetPlanetLoadMoreAction
                              | ISetPlantDetails
                              | ISetPlanetLoadStatus
                              | IPlanetDetailsFailAction
