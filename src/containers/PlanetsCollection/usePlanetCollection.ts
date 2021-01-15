import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../selectors/useSelector';
import { RootState } from '../../store/store';
import { thunkGetPlanetCollection } from '../../thunks/getPlanetCollection';

export function usePlanetCollection() {
  const dispatch = useDispatch();
  const planets = useSelector((state: RootState) => state.planets.planetsCollection);
  const isPlanetsLoaded = useSelector((state: RootState) => state.planets.isPlanetsLoaded);

  useEffect(() => {
    dispatch(thunkGetPlanetCollection());
  }, []);

  return {
    planets,
    isPlanetsLoaded,
  };
}
