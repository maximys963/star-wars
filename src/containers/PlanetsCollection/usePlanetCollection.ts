import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useSelector } from '../../hooks/useSelector';
import { RootState } from '../../redux/store/store';
import { getPlanetsCollection } from '../../redux/planets/planetsThunks';

export function usePlanetCollection() {
  const dispatch = useDispatch();
  const history = useHistory();
  const planets = useSelector((state: RootState) => state.planets.planetsCollection);
  const pageNumber = useSelector((state: RootState) => state.planets.pageNumber);
  const isNewPlanetsLoaded = useSelector((state: RootState) => state.planets.isNewPlanetsLoaded);
  const isPlanetsLoaded = useSelector((state: RootState) => state.planets.isPlanetsLoaded);

  useEffect(() => {
    dispatch(getPlanetsCollection(pageNumber));
  }, []);

  function loadPlanetCollection() {
    dispatch(getPlanetsCollection(pageNumber));
  }

  const navigateToPlanetDetails = (url: string, pathname: string) => {
    history.push({
      pathname,
      state: {
        url,
      },
    });
  };

  return {
    planets,
    isPlanetsLoaded,
    isNewPlanetsLoaded,
    loadPlanetCollection,
    navigateToPlanetDetails,
  };
}
