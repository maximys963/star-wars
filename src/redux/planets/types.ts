export interface IPlanetCollectionItem {
    name: string,
    climate: string,
    population: string
    url: string,
    residents: string[]
}

export interface IPlanetsState {
    planetsCollection: IPlanetCollectionItem[],
    isPlanetsLoaded: boolean,
    isPlanetDetailsLoaded: boolean,
    isNewPlanetsLoaded: boolean,
    planetsLoadError: string,
    planetDetailsError: string,
    pageNumber: number,
    planetDetails: IPlanetDetails
}

export interface IResident {
    name: string;
    height: string;
    mass: string;
    gender: string;
}

interface IPlanet {
    name: string;
    rotation_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    population: string;
}

export interface IPlanetResponse extends IPlanet {
    residents: string[];
}

export interface IPlanetDetails extends IPlanet {
    residents: Array<IResident>
}
