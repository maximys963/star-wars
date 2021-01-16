import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../selectors/useSelector';
import { RootState } from '../../store/store';
import { thunkGetPlanetCollection } from '../../thunks/planetsCollectionThunks';

export function usePlanetCollection() {
  const dispatch = useDispatch();
  const planets = useSelector((state: RootState) => state.planets.planetsCollection);
  const pageNumber = useSelector((state: RootState) => state.planets.pageNumber);
  const isNewPlanetsLoaded = useSelector((state: RootState) => state.planets.isNewPlanetsLoaded);
  const isPlanetsLoaded = useSelector((state: RootState) => state.planets.isPlanetsLoaded);

  useEffect(() => {
    dispatch(thunkGetPlanetCollection(pageNumber));
  }, []);

  function loadPlanetCollection() {
    dispatch(thunkGetPlanetCollection(pageNumber));
  }

  return {
    planets,
    isPlanetsLoaded,
    isNewPlanetsLoaded,
    loadPlanetCollection,
  };
}
