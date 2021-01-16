import { IPlanetCard } from '../../components/PlanetCard/types';

export interface IPlanetsState {
    planetsCollection: IPlanetCard[],
    isPlanetsLoaded: boolean,
    isNewPlanetsLoaded: boolean,
    pageNumber: number,
    planetDetails: object
}
