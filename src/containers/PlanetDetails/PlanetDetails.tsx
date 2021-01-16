import React from 'react';
import { usePlanetDetails } from './usePlanetDetails';
import styles from './PlanetDetails.module.css';

export const PlanetDetails = () => {
  usePlanetDetails();

  return (
    <div className={styles.container}>
      Planet Details
    </div>
  );
};
