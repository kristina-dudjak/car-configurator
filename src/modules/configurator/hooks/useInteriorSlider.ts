import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { configurationSelector } from 'modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export const useInteriorSlider = (page: number) => {
  const [image, setImage] = useState('');
  const { carName } = useParams();
  const { name, interior } = useRecoilValue(
    configurationSelector.configuration,
  );

  function getInteriorImage() {
    const storage = getStorage();
    getDownloadURL(
      ref(
        storage,
        'images/' + name + '/interiors/' + interior.id + '/' + page + '.png',
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
    if (name === carName) getInteriorImage();
  }, [name, interior, page]);
  return image;
};
