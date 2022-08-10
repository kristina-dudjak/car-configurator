import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { carAtoms } from '../state';

export const useSlider = (page: number) => {
  const [image, setImage] = useState('');
  const car = useRecoilValue(carAtoms.car);
  const configuration = useRecoilValue(carAtoms.configuration);

  function getCarImage() {
    const storage = getStorage();
    getDownloadURL(
      ref(
        storage,
        'images/' +
          car.name +
          '/exteriors/' +
          configuration.color.id +
          configuration.wheel.id +
          '/' +
          page +
          '.png',
      ),
    )
      .then((url) => {
        setImage(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (car.name !== '' && configuration.modelName != '') getCarImage();
  }, [car, configuration, page]);
  return image;
};
