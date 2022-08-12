/** @jsxImportSource @emotion/react */
import { useEditing } from 'modules';
import React from 'react';
import styles from './Interior.styles';

export const Interior: React.FC = () => {
  const { editing } = useEditing();

  return <section css={styles.container(editing)}></section>;
};
