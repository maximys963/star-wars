import React, { FC } from 'react';
import classnames from 'classnames/bind';
import CardActionArea from '@material-ui/core/CardActionArea';
import PlanetImage from '../../assets/images/planet.jpg';
import { IPlanetCard } from './types';
import styles from './PlanetCard.module.css';

const cx = classnames.bind(styles);

export const PlanetCard: FC<IPlanetCard> = (props) => {
  const {
    name,
    climate,
    population,
    containerStyles = '',
  } = props;

  const containerClasses = cx({
    [containerStyles]: !!containerStyles,
    container: true,
  });

  return (
    <div className={containerClasses}>
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
