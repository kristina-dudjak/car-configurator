/** @jsxImportSource @emotion/react */
import { configurationsAtoms, SavedItem } from 'modules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './SavedItems.styles';

export const SavedItems: React.FC = () => {
  const savedConfigurations = useRecoilValue(
    configurationsAtoms.configurations,
  );
  return (
    <div css={styles.container__saved}>
      {savedConfigurations &&
        savedConfigurations.map((saved) => (
          <SavedItem
            key={saved.creationDate.toDate().getTime()}
            saved={saved}
          />
        ))}
    </div>
  );
};
