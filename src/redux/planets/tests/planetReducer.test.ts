import { planetsReducer as reducer } from "../planetsReducer";
import { IPlanetsState } from '../types';
import {
    planetsActionTypes,
    CHANGE_PLANET_COLLECTION_LOAD_STATUS,
    INCREMENT_PAGE_NUMBER,
    UPDATE_PLANETS_COLLECTION,
    CHANGE_LOAD_MORE_STATUS,
    SET_PLANET_DETAILS,
    CHANGE_PLANET_LOAD_STATUS,
    LOAD_PLANETS_FAIL,
    LOAD_PLANET_DETAILS_FAIL,
} from '../planetsActionTypes';


const initialState: IPlanetsState = {
    planetsCollection: [],
    isPlanetsLoaded: false,
    isNewPlanetsLoaded: false,
    isPlanetDetailsLoaded: false,
    planetsLoadError: {},
    planetDetailsError: {},
    pageNumber: 0,
    planetDetails: {
        name: '',
        rotation_period: '',
        diameter: '',
        climate: '',
        gravity: '',
        terrain: '',
        population: '',
        residents: [{
            name: '',
            height: '',
            mass: '',
            gender: '',
        }],
    },
};

const mockPlanetDetails = {
        name: 'test',
        rotation_period: 'test',
        diameter: 'test',
        climate: 'test',
        gravity: 'test',
        terrain: 'test',
        population: 'test',
        residents: [{
            name: 'test',
            height: 'test',
            mass: 'test',
            gender: 'test',
        }],
    };


describe('planetsReducer', () => {
    it('should handle SET_PLANET_DETAILS', () => {
        const planetDetailsAction: planetsActionTypes = {
            type: SET_PLANET_DETAILS,
            planetDetails: mockPlanetDetails
        }
        expect(reducer(initialState, planetDetailsAction)).toEqual({...initialState, planetDetails: mockPlanetDetails});
    })
})
