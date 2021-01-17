import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../redux/store/store';
import { getPlanetsCollection } from '../../redux/planets/planetsThunks';

export function usePlanetCollection() {
  const dispatch = useDispatch();
  const history = useHistory();
  const planets = useTypedSelector((state: RootState) => state.planets.planetsCollection);
  const pageNumber = useTypedSelector((state: RootState) => state.planets.pageNumber);
  const isNewPlanetsLoaded = useTypedSelector(
    (state: RootState) => state.planets.isNewPlanetsLoaded,
  );
  const isPlanetsLoaded = useTypedSelector((state: RootState) => state.planets.isPlanetsLoaded);

  useEffect(() => {
    if (planets.length === 0) {
      dispatch(getPlanetsCollection(pageNumber));
    }
  }, []);

  function loadPlanetCollection() {
    dispatch(getPlanetsCollection(pageNumber));
  }

  const navigateToPlanetDetails = (url: string | undefined, pathname: string) => {
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
