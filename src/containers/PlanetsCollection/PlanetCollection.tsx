import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePlanetCollection } from './usePlanetCollection';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import styles from './PlanetCollection.module.css';

export function PlanetCollection() {
  const {
    isPlanetsLoaded,
  } = usePlanetCollection();
  return (
    <div className={styles.container}>
      {
            isPlanetsLoaded
              ? (
                <PlanetCard
                  name="dsdsf"
                  population="sdfsdfds"
                  climate="sdsfds"
                />
              )
              : (
                <CircularProgress color="secondary" />
              )
        }
    </div>
  );
}
