/** @jsxImportSource @emotion/react */
import { CheckMark } from 'assets';
import { CarItem, configurationAtoms, configurationSelector } from 'modules';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { EditedItem } from 'shared';
import styles from './PickerItem.styles';

interface PickerItemProps {
  item: CarItem;
  groupItem: EditedItem;
}

export const PickerItem: React.FC<PickerItemProps> = ({ item, groupItem }) => {
  const { color, wheel, interior } = useRecoilValue(
    configurationSelector.configuration,
  );
  const setColor = useSetRecoilState(configurationAtoms.configurationColor);
  const setWheel = useSetRecoilState(configurationAtoms.configurationWheel);
  const setInterior = useSetRecoilState(
    configurationAtoms.configurationInterior,
  );

  function change() {
    if (groupItem === EditedItem.Color) setColor(item);
    if (groupItem === EditedItem.Wheel) setWheel(item);
    if (groupItem === EditedItem.Interior) setInterior(item);
  }
  return (
    <div css={styles.container__details__item} onClick={change}>
      <span css={styles.container__image}>
        <img src={item.thumbnail} css={styles.image} />
        {(color.name === item.name ||
          wheel.name === item.name ||
          interior.name === item.name) && <CheckMark css={styles.checkmark} />}
      </span>
      <span css={styles.item__text}>
        <p css={styles.item__name}>{item.name}</p>
        {(color.name === item.name ||
          wheel.name === item.name ||
          interior.name === item.name) && (
          <p css={styles.item__price}>{item.price} €</p>
        )}
      </span>
    </div>
  );
};
