import React, { FC } from 'react';
import { useSelector } from '../../hooks/useSelector';
import styles from './Header.module.css';

export const Header:FC = () => {
  const pageNumber = useSelector((state) => state.planets.pageNumber);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Star Wars planets guide</div>
      <div className={styles.pageCounter}>
        Pages amount:
        {pageNumber}
      </div>
    </div>
  );
};
