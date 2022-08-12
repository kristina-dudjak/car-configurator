/** @jsxImportSource @emotion/react */
import { Info, X } from 'assets';
import { CarItem, finalPriceSelector, PickerItem } from 'modules';
import { useRecoilValue } from 'recoil';
import { EditedItem } from 'shared';
import styles from './ConfiguratorPicker.styles';

interface ConfiguratorPickerProps {
  group: EditedItem;
  items: CarItem[];
  onClose: () => void;
}

export const ConfiguratorPicker: React.FC<ConfiguratorPickerProps> = ({
  items,
  group,
  onClose,
}) => {
  const price = useRecoilValue(finalPriceSelector.finalPrice);
  let title = '';
  if (group === EditedItem.Color) title = 'Paint color';
  else if (group === EditedItem.Wheel) title = 'Wheel';
  else title = 'Color';
  return (
    <aside css={styles.container__details}>
      <div>
        <div css={styles.container__title}>
          <h2 css={styles.title}>{title}</h2>
          <X css={styles.title__close} onClick={onClose} />
        </div>
        <div css={styles.container__details__items}>
          {items.map((item) => (
            <PickerItem item={item} key={item.thumbnail} groupItem={group} />
          ))}
        </div>
      </div>
      <div css={styles.container__details__final}>
        <div css={styles.container__price}>
          <div css={styles.info__item__total}>
            <p css={styles.total}>Total</p>
            <Info css={styles.info} />
          </div>
          <p css={styles.price}>{price} €</p>
        </div>
        <button css={styles.button} onClick={onClose}>
          Done
        </button>
      </div>
    </aside>
  );
};
