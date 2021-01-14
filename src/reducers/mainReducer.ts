import { GET_PLANETS_COLLECTION } from '../actionTypes/planetDataTypes';
import { IPlanetCollection, IPlanetAction } from '../interfaces/interfaces';

const initialState: IPlanetCollection = {
    location: 'Boguslav',
    region: 'Kiev Region',
    temperature: 20,
    cloudCover: 40,
};

export const mainReducer = (state = initialState, action: IPlanetAction): IPlanetCollection => {
    switch (action.type) {
        case GET_PLANETS_COLLECTION:
            return state;
        default:
            return state;
    }
};
