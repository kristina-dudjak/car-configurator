/** @jsxImportSource @emotion/react */
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Configuration.styles';

export const Configuration: React.FC = () => {
  const { name } = useParams();

  return (
    <section css={styles.container}>
      <p>{name}</p>
    </section>
  );
};
