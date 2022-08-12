/** @jsxImportSource @emotion/react */
import {
  CarSlider,
  ConfiguratorNavBar,
  ConfiguratorPicker,
  ExteriorSidebar,
  useConfiguration,
  useEditing,
  useRouter,
} from 'modules';
import React from 'react';
import { EditedItem } from 'shared';
import { ErrorView } from 'views/error';
import styles from './Exterior.styles';

export const Exterior: React.FC = () => {
  const { editing, setEditing, items } = useEditing();
  useConfiguration();
  const isValid = useRouter();
  return (
    <>
      {isValid && (
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
      )}
      {!isValid && <ErrorView />}
    </>
  );
};
