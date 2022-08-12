/** @jsxImportSource @emotion/react */
import {
  CarInfo,
  CarSlider,
  ConfigurationInfo,
  ConfiguratorFooter,
  ConfiguratorNavBar,
  useModel,
} from 'modules';
import React from 'react';
import styles from './Summary.styles';

export const Summary: React.FC = () => {
  useModel();

  return (
    <section css={styles.container}>
      <div css={styles.container__text}>
        <p css={styles.bold__text}>Almost done!</p>
        <p>Review your configuration and save your car.</p>
      </div>
      <ConfiguratorNavBar />
      <CarSlider />
      <CarInfo />
      <p css={styles.text}>Your configuration details</p>
      <ConfigurationInfo />
      <ConfiguratorFooter />
    </section>
  );
};
