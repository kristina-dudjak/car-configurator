import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { configurationSelector } from '../state';

export const useSlider = (page: number) => {
  const [image, setImage] = useState('');
  const { carName } = useParams();
  const { name, color, wheel } = useRecoilValue(
    configurationSelector.configuration,
  );

  function getCarImage() {
    const storage = getStorage();
    getDownloadURL(
      ref(
        storage,
        'images/' +
          name +
          '/exteriors/' +
          color.id +
          wheel.id +
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
    if (name === carName) getCarImage();
  }, [name, color, wheel, page]);
  return image;
};
