import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { usePlanetCollection } from './usePlanetCollection';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';

import styles from './PlanetCollection.module.css';

export const PlanetCollection: FC = () => {
  const {
    isPlanetsLoaded,
    planets,
    loadPlanetCollection,
    isNewPlanetsLoaded,
    navigateToPlanetDetails,
  } = usePlanetCollection();

  return (
    <div className={styles.container}>
      <div
        className={styles.collectionContainer}
      >
        {
          isPlanetsLoaded
            ? (
              planets.map((planet) => (
                <PlanetCard
                  onClick={() => navigateToPlanetDetails(planet.url, `/planet/${planet.name}`)}
                  key={planet.name}
                  containerStyles={styles.cardContainer}
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
      <div className={styles.button}>
        <Button
          onClick={isNewPlanetsLoaded ? loadPlanetCollection : undefined}
          color="secondary"
          variant="outlined"
        >
          Load more
          {
                isNewPlanetsLoaded
                  ? null
                  : (
                    <div className={styles.button_loader}>
                      <CircularProgress color="secondary" size={20} />
                    </div>
                  )
            }
        </Button>
      </div>
    </div>
  );
};
