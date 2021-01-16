import { AppThunk } from '../types/thunkType';
import {
  updatePlanetCollection,
  changePlanetLoadStatus,
  incrementPageNumber,
  setPlanetLoadError,
  changeLoadMoreStatus,
} from '../actions/planetsCollectionActions';

export const thunkGetPlanetCollection = (pageNumber: number): AppThunk => async (dispatch) => {
  try {
    dispatch(changeLoadMoreStatus(false));
    console.log('pageNumber', pageNumber);
    // const response = await fetch(`http://swapi.dev/api/planets/?page=${pageNumber + 1}`);
    const response = await fetch('http://swapi.dev/api/planets/?page=7');
    if (response.ok) {
      const { results } = await response.json();
      dispatch(updatePlanetCollection(results));
      dispatch(incrementPageNumber());
      dispatch(changePlanetLoadStatus(true));
      dispatch(changeLoadMoreStatus(true));
    } else {
      const error = await response.json();
      throw (new Error(error.detail));
    }
  } catch (err) {
    dispatch(setPlanetLoadError(err));
    dispatch(changeLoadMoreStatus(false));
  }
};
