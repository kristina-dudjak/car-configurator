import { selector } from 'recoil';
import { Configuration } from '../models';
import { configurationAtoms } from './atoms';

const configuration = selector<Configuration>({
  key: 'configuration',
  get: ({ get }) => {
    const name = get(configurationAtoms.configurationCarName);
    const year = get(configurationAtoms.configurationCarYear);
    const color = get(configurationAtoms.configurationColor);
    const wheel = get(configurationAtoms.configurationWheel);
    const interior = get(configurationAtoms.configurationInterior);
    const price = get(configurationAtoms.configurationCarPrice);
    const creationDate = get(configurationAtoms.configurationCreationDate);

    return { name, price, year, color, creationDate, interior, wheel };
  },
  dangerouslyAllowMutability: true,
});

const finalPrice = selector<number>({
  key: 'finalPrice',
  get: ({ get }) => {
    const color = get(configurationAtoms.configurationColor);
    const wheel = get(configurationAtoms.configurationWheel);
    const interior = get(configurationAtoms.configurationInterior);
    const price = get(configurationAtoms.configurationCarPrice);
    const final = price + color.price + wheel.price + interior.price;

    return final;
  },
});

export const configurationSelector = { configuration };
export const finalPriceSelector = { finalPrice };
