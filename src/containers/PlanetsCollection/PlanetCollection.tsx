import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePlanetCollection } from './usePlanetCollection';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import styles from './PlanetCollection.module.css';

export function PlanetCollection() {
  const {
    isPlanetsLoaded,
    planets,
  } = usePlanetCollection();
  return (
    <div className={styles.container}>
      {
            isPlanetsLoaded
              ? (
                planets.map((planet) => (
                  <PlanetCard
                    containerStyles={styles.cardContainer}
                    key={planet.name}
                    name={planet.name}
                    climate={planet.climate}
                    population={planet.population}
                  />
                ))
              )
              : (
                <CircularProgress color="secondary" />
              )
        }
    </div>
  );
}
