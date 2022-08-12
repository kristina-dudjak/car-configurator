import { Timestamp } from 'firebase/firestore';
import { carAtoms, configurationAtoms } from 'modules';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const useConfiguration = () => {
  const setConfName = useSetRecoilState(
    configurationAtoms.configurationCarName,
  );
  const setConfYear = useSetRecoilState(
    configurationAtoms.configurationCarYear,
  );
  const setConfPrice = useSetRecoilState(
    configurationAtoms.configurationCarPrice,
  );
  const setConfColor = useSetRecoilState(configurationAtoms.configurationColor);
  const setConfWheel = useSetRecoilState(configurationAtoms.configurationWheel);
  const setConfInterior = useSetRecoilState(
    configurationAtoms.configurationInterior,
  );
  const setConfDate = useSetRecoilState(
    configurationAtoms.configurationCreationDate,
  );
  const car = useRecoilValue(carAtoms.car);
  const { name } = useParams();

  function setDefaultConfiguration() {
    setConfName(car.name);
    setConfYear(car.year);
    setConfPrice(
      car.price +
        car.colors[0].price +
        car.wheels[0].price +
        car.interiors[0].price,
    );
    setConfDate(Timestamp.now());
    setConfColor(car.colors[0]);
    setConfInterior(car.interiors[0]);
    setConfWheel(car.wheels[0]);
  }

  useEffect(() => {
    if (car.name != '' && car.name === name) setDefaultConfiguration();
  }, [car]);
};
