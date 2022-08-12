/** @jsxImportSource @emotion/react */
import {
  CarInfo,
  CarSlider,
  ConfigurationInfo,
  NavBar,
  useConfiguration,
  useModel,
} from 'modules';
import React from 'react';
import styles from './Configuration.styles';

export const Configuration: React.FC = () => {
  useModel();
  useConfiguration();

  return (
    <section css={styles.container}>
      <NavBar />
      <CarSlider />
      <CarInfo />
      <p css={styles.text}>Your configuration details</p>
      <ConfigurationInfo />
    </section>
  );
};
