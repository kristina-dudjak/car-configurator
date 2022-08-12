import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { configurationSelector } from '../state';

export const useSlider = (page: number) => {
  const [image, setImage] = useState('');
  const { name } = useParams();
  const configuration = useRecoilValue(configurationSelector.configuration);

  function getCarImage() {
    const storage = getStorage();
    getDownloadURL(
      ref(
        storage,
        'images/' +
          configuration.name +
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
    if (configuration.name === name) getCarImage();
  }, [configuration, page]);
  return image;
};
