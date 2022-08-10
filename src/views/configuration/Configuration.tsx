/** @jsxImportSource @emotion/react */
import React from 'react';
import { useParams } from 'react-router-dom';

export const Configuration: React.FC = () => {
  const { name } = useParams();

  return (
    <section>
      <p>{name}</p>
    </section>
  );
};
