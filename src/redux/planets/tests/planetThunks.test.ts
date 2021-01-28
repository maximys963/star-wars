import fetchMock from "fetch-mock";
import configureMockStore from 'redux-mock-store';
import{ initialState } from "../planetsReducer";
import {
    getPlanetsCollection,
    getPlanetDetails,
} from "../planetsThunks";
import thunk from 'redux-thunk';
import { mocks } from "../../../utils/mocks/mocks";
import { planetsActionsConstants } from "../planetsActionTypes";
import {SHOW_ALERT} from "../../alert/alertActionTypes";

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('planet thunks', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('getPlanetsCollection creates GET_PLANETS_COLLECTION_SUCCESS when fetching planet collection has been done', () => {
        // fetchMock.getOnce('http://swapi.dev/api/planets/?page=1', {
        //     body: { results: mocks.planetCollectionMock },
        //     headers: { 'content-type': 'application/json' },
        //     status: 200
        // })

        jest.spyOn(window, 'fetch').mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                   results: mocks.planetCollectionMock,
                })
            } as Response)
        })


        const expectedActions = [
            {
                type: planetsActionsConstants.CHANGE_LOAD_MORE_STATUS,
                isNewPlanetsLoaded: false,

            },
            {
                type: planetsActionsConstants.GET_PLANETS_COLLECTION_SUCCESS,
                planetsCollection: mocks.planetCollectionMock,
            },
            {
                type: planetsActionsConstants.INCREMENT_PAGE_NUMBER,
            },
            {
                type: planetsActionsConstants.CHANGE_PLANET_COLLECTION_LOAD_STATUS,
                isPlanetsLoaded: true,
            },
            {
                type: planetsActionsConstants.CHANGE_LOAD_MORE_STATUS,
                isNewPlanetsLoaded: true,
            }
        ];

        const store = mockStore(initialState);

        store.dispatch<any>(getPlanetsCollection(0)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('getPlanetsCollection creates GET_PLANETS_COLLECTION_FAIL when fetching planet collection has been failed', () => {
        fetchMock.getOnce('http://swapi.dev/api/planets/?page=1', {
            body: { detail: 'Not found' },
            headers: { 'content-type': 'application/json' },
            status: 404
        })

        const expectedActions = [
            {
                type: planetsActionsConstants.CHANGE_LOAD_MORE_STATUS,
                isNewPlanetsLoaded: false,
            },
            {
                type: SHOW_ALERT,
                message: 'There are no planets in other pages',
                severity: 'warning',
            },
            {
                type: planetsActionsConstants.CHANGE_LOAD_MORE_STATUS,
                isNewPlanetsLoaded: true,
            },
            {
                type: planetsActionsConstants.GET_PLANETS_COLLECTION_FAIL,
                planetsLoadError: 'Not found' ,
            }
        ];

        const store = mockStore(initialState);


         store.dispatch<any>(getPlanetsCollection(0)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('getPlanetDetails creates GET_PLANET_DETAILS_SUCCESS when fetching planet details has been done', () => {
        const detailsUrl = 'http://swapi.dev/api/planets/1/'
        fetchMock.getOnce(detailsUrl, {
            body: { ...mocks.mockPlanetDetailsResponse },
            headers: { 'content-type': 'application/json' },
            status: 200
        })

        fetchMock.getOnce(mocks.mockPlanetDetailsResponse.residents[1], {
            body: { ...mocks.firstResident },
            headers: { 'content-type': 'application/json' },
            status: 200
        })

        fetchMock.getOnce(mocks.mockPlanetDetailsResponse.residents[2], {
            body: { ...mocks.secondResident },
            headers: { 'content-type': 'application/json' },
            status: 200
        })

        const expectedActions = [
            {
                type: planetsActionsConstants.CHANGE_PLANET_LOAD_STATUS,
                isPlanetDetailsLoaded: false
            },
            {
                type: planetsActionsConstants.GET_PLANET_DETAILS_SUCCESS,
                planetDetails: mocks.planetDetailsMock
            },
            {
                type: planetsActionsConstants.CHANGE_PLANET_LOAD_STATUS,
                isPlanetDetailsLoaded: true
            }
        ];

        const store = mockStore(initialState);

        store.dispatch<any>(getPlanetDetails(detailsUrl)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});
