import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePlanetDetails } from './usePlanetDetails';
import { CustomAccordion } from '../../components/CustomAccordion/CustomAcordion';
import PlanetImage from '../../assets/images/planet.jpg';
import styles from './PlanetDetails.module.css';

export const PlanetDetails = () => {
  const {
    isPlanetDetailsLoaded,
    planet,
  } = usePlanetDetails();

  const renderAccordionContent = (height: string, mass:string, gender: string) => (
    <div>
      <div className={styles.detail_item}>
        <div className={styles.resident_title}>Height:</div>
        <div>{height}</div>
      </div>
      <div className={styles.detail_item}>
        <div className={styles.resident_title}>Mass:</div>
        <div>{mass}</div>
      </div>
      <div className={styles.detail_item}>
        <div className={styles.resident_title}>Gender:</div>
        <div>{gender}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {
            isPlanetDetailsLoaded
              ? (
                <div className={styles.inner_container}>
                  <div className={styles.left_colon}>
                    <img
                      alt="planet"
                      src={PlanetImage}
                      className={styles.image}
                    />
                    <h3>{planet.name}</h3>
                  </div>
                  <div className={styles.right_colon}>
                    <div className={styles.info_container}>
                      <div className={styles.detail_item}>
                        <div className={styles.info_title}>Rotation period:</div>
                        <div>{planet.rotation_period}</div>
                      </div>
                      <div className={styles.detail_item}>
                        <div className={styles.info_title}>Diameter:</div>
                        <div>{planet.diameter}</div>
                      </div>
                      <div className={styles.detail_item}>
                        <div className={styles.info_title}>Climate:</div>
                        <div>{planet.climate}</div>
                      </div>
                      <div className={styles.detail_item}>
                        <div className={styles.info_title}>Gravity:</div>
                        <div>{planet.gravity}</div>
                      </div>
                      <div className={styles.detail_item}>
                        <div className={styles.info_title}>Terrain:</div>
                        <div>{planet.terrain}</div>
                      </div>
                      <div className={styles.detail_item}>
                        <div className={styles.info_title}>Population:</div>
                        <div>{planet.population}</div>
                      </div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.detail_item}>
                      <div className={styles.info_title}>Residents:</div>
                    </div>
                    <div className={styles.accordion_container}>
                      {
                        planet.residents.length === 0
                          ? <div className={styles.no_residents}>No residents in this planet</div>
                          : planet.residents.map((resident) => (
                            <div className={styles.accordion_item}>
                              <CustomAccordion title={resident.name}>
                                {renderAccordionContent(
                                  resident.height,
                                  resident.mass,
                                  resident.gender,
                                )}
                              </CustomAccordion>
                            </div>
                          ))
                      }
                    </div>
                  </div>
                </div>
              )
              : (
                <div className={styles.loader_container}>
                  <CircularProgress color="secondary" />
                </div>
              )
        }
    </div>
  );
};

// TODO redux store test reducer
// TODO test thunks
// TODO ui test
// TODO test api
// TODO test hooks
