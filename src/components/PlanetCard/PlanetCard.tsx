import React, { FC } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import PlanetImage from '../../assets/images/planet.jpg';
import styles from './PlanetCard.module.css';

interface IPlanetCard {
    name: string,
    climate: string,
    population: string
}

export const PlanetCard: FC<IPlanetCard> = (props) => {
  const {
    name,
    climate,
    population,
  } = props;

  return (
    <div className={styles.container}>
      <CardActionArea>
        <img
          className={styles.planet_img}
          src={PlanetImage}
          alt="planet"
        />
        <div>
          Name:
          {name}
        </div>
        <div>
          Climate:
          {climate}
        </div>
        <div>
          Population:
          {population}
        </div>
      </CardActionArea>
    </div>
  );
};
