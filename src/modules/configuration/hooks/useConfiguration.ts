import { deleteDoc, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { authAtoms, carAtoms, Configuration } from 'modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { db } from '../../../firebase';

export const useConfiguration = () => {
  const userId = useRecoilValue(authAtoms.userUid);
  const [configuration, setConfiguration] = useState<Configuration>();
  const [savedConfiguration, setSavedConfiguration] = useState<Configuration>();
  const setConfigurationRecoilState = useSetRecoilState(carAtoms.configuration);
  const car = useRecoilValue(carAtoms.car);
  const { name } = useParams();

  async function saveConfiguration(configuration: Configuration) {
    setDoc(
      doc(db, 'users', userId, 'configurations', configuration.modelName),
      {
        color: configuration.color,
        wheel: configuration.wheel,
        interior: configuration.interior,
        creationDate: configuration.creationDate,
        price: configuration.price,
        year: configuration.year,
      },
      { merge: true },
    );

    setSavedConfiguration(configuration);
    setConfigurationRecoilState(configuration);
  }
  async function getSavedConfiguration(modelName: string) {
    const configurationRef = doc(
      db,
      'users',
      userId,
      'configurations/' + modelName,
    );
    const configuration: Configuration = {
      modelName: modelName,
      color: car.colors[0],
      wheel: car.wheels[0],
      interior: car.interiors[0],
      year: car.year,
      price:
        car.price +
        car.colors[0].price +
        car.wheels[0].price +
        car.interiors[0].price,
      creationDate: Timestamp.now(),
    };
    const confSnapshot = await getDoc(configurationRef);
    if (confSnapshot.exists()) {
      configuration.color = confSnapshot.data().color;
      configuration.wheel = confSnapshot.data().wheel;
      configuration.interior = confSnapshot.data().interior;
      configuration.creationDate = confSnapshot.data().creationDate;
      configuration.price = confSnapshot.data().price;
      configuration.year = confSnapshot.data().year;

      setSavedConfiguration(configuration);
      setConfigurationRecoilState(configuration);
    } else {
      saveConfiguration(configuration);
    }
  }

  async function deleteConfiguration(modelName: string) {
    await deleteDoc(doc(db, 'users', userId, 'configurations/' + modelName));
  }

  useEffect(() => {
    if (car.name === name) getSavedConfiguration(name);
  }, [car, configuration]);

  useEffect(() => {
    if (car.name === name && configuration) saveConfiguration(configuration);
  }, [configuration]);

  return {
    savedConfiguration,
    setConfiguration,
    deleteConfiguration,
  };
};
