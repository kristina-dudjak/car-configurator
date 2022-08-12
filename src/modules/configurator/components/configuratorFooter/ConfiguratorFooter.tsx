/** @jsxImportSource @emotion/react */
import { Info } from 'assets';
import { carAtoms, finalPriceSelector, useConfigurator } from 'modules';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styles from './ConfiguratorFooter.styles';

export const ConfiguratorFooter: React.FC = () => {
  const { year, name } = useRecoilValue(carAtoms.car);
  const price = useRecoilValue(finalPriceSelector.finalPrice);
  const { saveConfiguration } = useConfigurator();
  const navigate = useNavigate();

  async function saveConf() {
    await saveConfiguration();
    navigate('/');
  }

  return (
    <nav css={styles.container__nav}>
      <div css={styles.container__nav__left}>
        <p css={styles.year}>{year}</p>
        <p css={styles.car}>{name}</p>
      </div>
      <div css={styles.container__right}>
        <div css={styles.info__item__total}>
          <p css={styles.total}>Total</p>
          <Info css={styles.info} />
        </div>
        <p css={styles.total__price}>{price} €</p>
        <button css={styles.button} onClick={saveConf}>
          Save your configuration
        </button>
      </div>
    </nav>
  );
};
