import { AppThunk } from '../types/thunkType';
import { updatePlanetCollection } from '../actions/getPlanetsCollection';

export const thunkGetPlanetCollection = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch('http://swapi.dev/api/planets/?page=1');
    const { results } = await response.json();

    dispatch(updatePlanetCollection(results));
  } catch (err) {
    console.log('err', err);
  }
};
