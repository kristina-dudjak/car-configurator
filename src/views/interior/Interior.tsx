/** @jsxImportSource @emotion/react */
import {
  ConfiguratorNavBar,
  ConfiguratorPicker,
  InteriorSidebar,
  InteriorSlider,
  useConfiguration,
  useEditing,
  useRouter,
} from 'modules';
import React from 'react';
import { EditedItem } from 'shared';
import { ErrorView } from 'views';
import styles from './Interior.styles';

export const Interior: React.FC = () => {
  useConfiguration();
  const isValid = useRouter();
  const { editing, setEditing, items } = useEditing();

  return (
    <>
      {isValid && (
        <section css={styles.container(editing)}>
          <ConfiguratorNavBar />
          <InteriorSlider />
          <InteriorSidebar onInterior={() => setEditing(EditedItem.Interior)} />
          {editing !== EditedItem.None && (
            <ConfiguratorPicker
              group={editing}
              items={items}
              onClose={() => setEditing(EditedItem.None)}
            />
          )}
        </section>
      )}
      {!isValid && <ErrorView />}
    </>
  );
};
