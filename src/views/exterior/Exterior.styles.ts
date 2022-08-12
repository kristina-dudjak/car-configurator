import { css } from '@emotion/react';
import { EditedItem } from 'shared';

function container(editing: EditedItem) {
  return css({
    display: 'grid',
    gridTemplate: '1fr 6fr / repeat(12, 1fr)',
    columnGap: '2%',
    height: '100%',
    justifyItems: 'stretch',
    gridTemplateAreas:
      editing !== EditedItem.None
        ? "'nav nav nav nav nav nav nav nav nav details details details' 'slider slider slider slider slider slider slider slider slider details details details'"
        : "'nav nav nav nav nav nav nav nav nav nav nav nav' 'slider slider slider slider slider slider slider slider slider details details details'",
    '@media(max-width: 900px)': {
      gridTemplateAreas:
        "'nav nav nav nav nav nav nav nav nav nav nav nav' 'slider slider slider slider slider slider slider slider slider slider slider slider' 'details details details details details details details details details details details details'",
    },
  });
}

export default {
  container,
};
