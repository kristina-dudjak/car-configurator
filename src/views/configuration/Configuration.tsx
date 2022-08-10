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
import { useParams } from 'react-router-dom';
import styles from './Configuration.styles';

export const Configuration: React.FC = () => {
  const { name } = useParams();
  useModel(name!);
  useConfiguration(name!);

  return (
    <section css={styles.container}>
      <NavBar />
      <CarSlider />
      <CarInfo />
      <ConfigurationInfo />
    </section>
  );
};
