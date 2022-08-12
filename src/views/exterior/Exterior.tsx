/** @jsxImportSource @emotion/react */
import { CarSlider, useEditing } from 'modules';
import React from 'react';
import styles from './Exterior.styles';

export const Exterior: React.FC = () => {
  const { editing } = useEditing();
  return (
    <section css={styles.container(editing)}>
      <CarSlider />
    </section>
  );
};
