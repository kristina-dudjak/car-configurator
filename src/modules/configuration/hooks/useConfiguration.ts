import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { authAtoms, carAtoms, Configuration } from 'modules';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { db } from '../../../firebase';

export const useConfiguration = (name: string) => {
  const userId = useRecoilValue(authAtoms.userUid);
  const [configuration, setConfiguration] = useState<Configuration>();
  const [savedConfiguration, setSavedConfiguration] = useState<Configuration>();
  const setConfigurationRecoilState = useSetRecoilState(carAtoms.configuration);
  const car = useRecoilValue(carAtoms.car);

  async function saveConfiguration(configuration: Configuration) {
    setDoc(
      doc(db, 'users', userId, 'configurations', configuration.modelName),
      {
        color: configuration.color,
        wheel: configuration.wheel,
        interior: configuration.interior,
        creationDate: configuration.creationDate,
        price: configuration.price,
      },
      { merge: true },
    );

    setSavedConfiguration(configuration);
    setConfigurationRecoilState(configuration);
  }
  async function getSavedConfiguration(modelName: string) {
    const ref = doc(db, 'users', userId, 'configurations/' + modelName);
    const configuration: Configuration = {
      modelName: modelName,
      color: car.colors[0],
      wheel: car.wheels[0],
      interior: car.interiors[0],
      price:
        car.price +
        car.colors[0].price +
        car.wheels[0].price +
        car.interiors[0].price,
      creationDate: Timestamp.now(),
    };
    const querySnapshot = await getDoc(ref);
    if (querySnapshot.exists()) {
      configuration.color = querySnapshot.data().color;
      configuration.wheel = querySnapshot.data().wheel;
      configuration.interior = querySnapshot.data().interior;
      configuration.creationDate = querySnapshot.data().creationDate;
      configuration.price = querySnapshot.data().price;

      setSavedConfiguration(configuration);
      setConfigurationRecoilState(configuration);
    } else {
      saveConfiguration(configuration);
    }
  }

  useEffect(() => {
    if (car.name === name) getSavedConfiguration(name);
  }, [car]);

  useEffect(() => {
    if (car && configuration) saveConfiguration(configuration);
  }, [configuration]);

  return {
    savedConfiguration,
    setConfiguration,
  };
};
