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
    onClick,
  } = props;

  const containerClasses = cx({
    [containerStyles]: !!containerStyles,
    container: true,
  });

  // @ts-ignore
  return (
    <div className={containerClasses}>
      <CardActionArea
        className={styles.touchArea}
        onClick={onClick}
      >
        <img
          className={styles.planet_img}
          src={PlanetImage}
          alt="planet"
        />
        <div className={styles.card_info_container}>
          <div className={styles.card_info}>
            <div className={styles.planet_title}>Name:</div>
            <div>{name}</div>
          </div>
          <div className={styles.card_info}>
            <div className={styles.planet_title}>Climate:</div>
            <div>{climate}</div>
          </div>
          <div className={styles.card_info}>
            <div className={styles.planet_title}>Population:</div>
            <div>{population}</div>
          </div>
        </div>
      </CardActionArea>
    </div>
  );
};
