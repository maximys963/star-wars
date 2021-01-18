import { AppThunk } from '../../types/thunkType';
import {
  IResident,
  IPlanetResponse,
} from './types';
import {
  updatePlanetCollection,
  changePlanetCollectionLoadStatus,
  incrementPageNumber,
  setPlanetsCollectionLoadError,
  changeLoadMoreStatus,
  setPlanetDetails,
  setPlanetLoadStatus,
  setPlanetsDetailsLoadError,
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
      dispatch(changePlanetCollectionLoadStatus(true));
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
    dispatch(changeLoadMoreStatus(true));
    dispatch(setPlanetsCollectionLoadError(err.message.toString()));
  }
};

export const getPlanetDetails = (url: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setPlanetLoadStatus(false));
    const planet = await getPlanet(url);
    console.log('planet', planet);
    let residents: Array<IResident> = [];
    console.log('planet.residents', planet.residents);
    if (planet.residents.length !== 0) {
      residents = await Promise.all(
        planet.residents.map((residentUrl: string) => getResidentsOfPlanet(residentUrl)),
      );
    }

    console.log('residents', residents);

    const planetDetails = {
      name: planet.name,
      rotation_period: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      population: planet.population,
      residents,
    };

    console.log('planetDetails', planetDetails);

    dispatch(setPlanetDetails(planetDetails));
    dispatch(setPlanetLoadStatus(true));
  } catch (err) {
    dispatch(setPlanetsDetailsLoadError(err));
  }
};

const getPlanet = async (url: string): Promise<IPlanetResponse> => {
  const planetResponse = await fetch(url);
  const planet = await planetResponse.json();

  return planet;
};

const getResidentsOfPlanet = async (residentsUrl: string): Promise<IResident> => {
  const response = await fetch(residentsUrl);
  const resident = await response.json();

  return resident;
};
