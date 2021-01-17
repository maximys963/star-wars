import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Header.module.css';

export const Header:FC = () => {
  const pageNumber = useTypedSelector((state) => state.planets.pageNumber);
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
