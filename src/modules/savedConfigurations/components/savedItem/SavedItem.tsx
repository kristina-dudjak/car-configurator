/** @jsxImportSource @emotion/react */
import { Dots } from 'assets';
import React, { useState } from 'react';
import styles from './SavedItem.styles';
import { Configuration, useSaved } from 'modules';

interface SavedItemProps {
  saved: Configuration;
}

export const SavedItem: React.FC<SavedItemProps> = ({ saved }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { editSaved, deleteSaved, getSideImage } = useSaved();
  const url = getSideImage(saved);
  const date = saved.creationDate.toDate().toISOString();

  return (
    <div css={styles.container}>
      <div css={styles.container__info}>
        <img css={styles.image} src={url} />
        <div css={styles.container__text}>
          <div>
            <p css={styles.year}>{saved.year}</p>
            <h2 css={styles.name}>{saved.name}</h2>
            <p css={styles.color}>{saved.color.name}</p>
          </div>
          <p css={styles.time}>Created {date.split('T')[0]}</p>
        </div>
      </div>
      <div css={styles.container__more}>
        <Dots css={styles.more} onClick={() => setIsVisible(!isVisible)} />
        <div css={styles.container__menu(isVisible)}>
          <a
            css={styles.container__menu__edit}
            onClick={() => editSaved(saved)}
          >
            Edit configuration
          </a>
          <a
            css={styles.container__menu__delete}
            onClick={() => deleteSaved(saved)}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};
