import { IPlanetCard } from '../components/PlanetCard/IPlanetCard';

export interface IPlanetsState {
    planetsCollection: IPlanetCard[]
    isPlanetsLoaded: boolean
}
