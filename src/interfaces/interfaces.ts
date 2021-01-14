export interface IPlanetCollection {
    location: string;
    region: string;
    temperature: number;
    cloudCover: number;
}

export interface IPlanetAction {
    type: string;
    weatherData: IPlanetCollection;
}
