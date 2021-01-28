import {initialState, planetsReducer as reducer} from "../planetsReducer";
import {mocks} from "../../../utils/mocks/mocks";
import {
    planetsActionTypes,
    planetsActionsConstants,
} from '../planetsActionTypes';

describe('planetsReducer', () => {
    it('should handle GET_PLANET_DETAILS_SUCCESS', () => {
        const planetDetailsAction: planetsActionTypes = {
            type: planetsActionsConstants.GET_PLANET_DETAILS_SUCCESS,
            planetDetails: mocks.planetDetailsMock
        }
        const updateState = reducer(initialState, planetDetailsAction)
        expect(updateState).toEqual({...initialState, planetDetails: mocks.planetDetailsMock});
    });

    it('should handle GET_PLANETS_COLLECTION_SUCCESS', () => {
        const planetsCollectionAction: planetsActionTypes = {
            type: planetsActionsConstants.GET_PLANETS_COLLECTION_SUCCESS,
            planetsCollection: mocks.planetCollectionMock
        }
        const updateState = reducer(initialState, planetsCollectionAction)
        expect(updateState).toEqual({...initialState, planetsCollection: mocks.planetCollectionMock});
    });

    it('should handle INCREMENT_PAGE_NUMBER', () => {
        const planetsCollectionAction: planetsActionTypes = {
            type: planetsActionsConstants.INCREMENT_PAGE_NUMBER,
        }
        const updateState = reducer(initialState, planetsCollectionAction)
        expect(updateState.pageNumber).toBe(1);
    });

    it('should handle CHANGE_PLANET_COLLECTION_LOAD_STATUS true', () => {
        const planetsCollectionAction: planetsActionTypes = {
            type: planetsActionsConstants.CHANGE_PLANET_COLLECTION_LOAD_STATUS,
            isPlanetsLoaded: true
        }
        const updateState = reducer(initialState, planetsCollectionAction)
        expect(updateState.isPlanetsLoaded).toBeTruthy();
    });

    it('should handle CHANGE_PLANET_COLLECTION_LOAD_STATUS false', () => {
        const planetsCollectionAction: planetsActionTypes = {
            type: planetsActionsConstants.CHANGE_PLANET_COLLECTION_LOAD_STATUS,
            isPlanetsLoaded: false
        }
        const updateState = reducer(initialState, planetsCollectionAction)
        expect(updateState.isPlanetsLoaded).toBeFalsy();
    });

})
