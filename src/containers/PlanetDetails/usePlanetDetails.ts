import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getPlanetDetails } from '../../redux/planets/planetsThunks';
import { ILocation } from '../PlanetsCollection/types';

export function usePlanetDetails() {
  const isPlanetDetailsLoaded = useTypedSelector((state) => state.planets.isPlanetDetailsLoaded);
  const planet = useTypedSelector((state) => state.planets.planetDetails);
  const dispatch = useDispatch();
  const location = useLocation<ILocation>();
  const history = useHistory();
  const url = location.state?.url;

  useEffect(() => {
    if (url) {
      dispatch(getPlanetDetails(location.state.url));
    } else {
      history.push('/');
    }
  }, []);

  return {
    isPlanetDetailsLoaded,
    planet,
  };
}
