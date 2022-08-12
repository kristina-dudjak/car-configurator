/** @jsxImportSource @emotion/react */
import {
  CarSlider,
  ConfiguratorNavBar,
  ConfiguratorPicker,
  ExteriorSidebar,
  useEditing,
} from 'modules';
import React from 'react';
import { EditedItem } from 'shared';
import styles from './Exterior.styles';

export const Exterior: React.FC = () => {
  const { editing, setEditing, items } = useEditing();
  return (
    <section css={styles.container(editing)}>
      <ConfiguratorNavBar />
      <CarSlider />
      <ExteriorSidebar
        onColor={() => setEditing(EditedItem.Color)}
        onWheel={() => setEditing(EditedItem.Wheel)}
      />
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
