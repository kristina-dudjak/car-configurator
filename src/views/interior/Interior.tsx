/** @jsxImportSource @emotion/react */
import {
  ConfiguratorNavBar,
  ConfiguratorPicker,
  InteriorSidebar,
  InteriorSlider,
  useEditing,
} from 'modules';
import React from 'react';
import { EditedItem } from 'shared';
import styles from './Interior.styles';

export const Interior: React.FC = () => {
  const { editing, setEditing, items } = useEditing();

  return (
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
  );
};
