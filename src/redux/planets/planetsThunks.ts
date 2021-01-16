import { AppThunk } from '../../types/thunkType';
import {
  updatePlanetCollection,
  changePlanetLoadStatus,
  incrementPageNumber,
  setPlanetLoadError,
  changeLoadMoreStatus,
  setPlanetDetails,
} from './planetsActions';
import { showAlert } from '../alert/alertActions';

export const getPlanetsCollection = (pageNumber: number): AppThunk => async (dispatch) => {
  try {
    dispatch(changeLoadMoreStatus(false));
    const response = await fetch(`http://swapi.dev/api/planets/?page=${pageNumber + 1}`);
    if (response.ok) {
      const { results } = await response.json();
      dispatch(updatePlanetCollection(results));
      dispatch(incrementPageNumber());
      dispatch(changePlanetLoadStatus(true));
      dispatch(changeLoadMoreStatus(true));
    } else {
      dispatch(showAlert({
        message: 'There are no planets in other pages',
        severity: 'warning',
      }));
      const error = await response.json();
      throw (new Error(error.detail));
    }
  } catch (err) {
    dispatch(setPlanetLoadError(err));
    dispatch(changeLoadMoreStatus(true));
  }
};

export const getPlanetDetails = (url: string): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(url);
    const planetDetails = await response.json();
    console.log('planetDetails', planetDetails);
    dispatch(setPlanetDetails(planetDetails));
  } catch (err) {
    console.log('err', err);
  }
};
