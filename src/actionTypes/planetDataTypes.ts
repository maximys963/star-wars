export const UPDATE_PLANETS_COLLECTION = 'UPDATE_PLANETS_COLLECTION';
export const CHANGE_PLANET_LOAD_STATUS = 'CHANGE_PLANET_LOAD_STATUS';

interface IGetPlanetCollectionAction {
    type: typeof UPDATE_PLANETS_COLLECTION,
    planetsCollection: []
}

interface ISetPlanetLoadedAction {
    type: typeof CHANGE_PLANET_LOAD_STATUS,
    isPlanetsLoaded: boolean
}

export type actionDataTypes = IGetPlanetCollectionAction | ISetPlanetLoadedAction
