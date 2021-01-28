import configureStore from 'redux-mock-store';
import {
    updatePlanetCollection,
    incrementPageNumber,
    setPlanetDetails,
} from "../planetsActions";
import { mocks } from "../../../utils/mocks/mocks";
import { planetsActionsConstants } from '../planetsActionTypes';

describe('planetActions', () => {
    const mockStore = configureStore();
    const reduxStore = mockStore();

    beforeEach(() => {
        reduxStore.clearActions();
    });

    it('updatePlanetCollection action', () => {
        const expectedActions = [
            {
                type: planetsActionsConstants.GET_PLANETS_COLLECTION_SUCCESS,
                planetsCollection: mocks.planetCollectionMock
            },
        ];
        reduxStore.dispatch(updatePlanetCollection(mocks.planetCollectionMock))
        expect(reduxStore.getActions()).toEqual(expectedActions)
    });

    it('incrementPageNumber action', () => {
        const expectedActions = [
            {
                type: planetsActionsConstants.INCREMENT_PAGE_NUMBER,
            },
        ];
        reduxStore.dispatch(incrementPageNumber())
        expect(reduxStore.getActions()).toEqual(expectedActions)
    })

    it('setPlanetDetails action', () => {
        const expectedActions = [
            {
                type: planetsActionsConstants.GET_PLANET_DETAILS_SUCCESS,
                planetDetails: mocks.planetDetailsMock,
            },
        ];
        reduxStore.dispatch(setPlanetDetails(mocks.planetDetailsMock))
        expect(reduxStore.getActions()).toEqual(expectedActions);
    })
})
