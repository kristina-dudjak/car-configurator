/** @jsxImportSource @emotion/react */
import {
  CarInfo,
  CarSlider,
  ConfigurationInfo,
  NavBar,
  useConfiguration,
  useModel,
  useRouter,
} from 'modules';
import React from 'react';
import { ErrorView } from 'views/error';
import styles from './Configuration.styles';

export const Configuration: React.FC = () => {
  useModel();
  useConfiguration();
  const isValid = useRouter();
  return (
    <>
      {isValid && (
        <section css={styles.container}>
          <NavBar />
          <CarSlider />
          <CarInfo />
          <p css={styles.text}>Your configuration details</p>
          <ConfigurationInfo />
        </section>
      )}
      {!isValid && <ErrorView />}
    </>
  );
};
