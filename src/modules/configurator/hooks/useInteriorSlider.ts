import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { configurationSelector } from 'modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export const useInteriorSlider = (page: number) => {
  const [image, setImage] = useState('');
  const { name } = useParams();
  const configuration = useRecoilValue(configurationSelector.configuration);

  function getInteriorImage() {
    const storage = getStorage();
    getDownloadURL(
      ref(
        storage,
        'images/' +
          configuration.name +
          '/interiors/' +
          configuration.interior.id +
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
    if (configuration.name === name) getInteriorImage();
  }, [configuration, page]);
  return image;
};
