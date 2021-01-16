import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { getPlanetDetails } from '../../redux/planets/planetsThunks';
import { ILocation } from '../PlanetsCollection/types';

export function usePlanetDetails() {
  const dispatch = useDispatch();
  const location = useLocation<ILocation>();

  useEffect(() => {
    dispatch(getPlanetDetails(location.state.url));
  }, []);
}
