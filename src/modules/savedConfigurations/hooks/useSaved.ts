import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import {
  authAtoms,
  Configuration,
  configurationAtoms,
  configurationsAtoms,
} from 'modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { db } from '../../../firebase';
export const useSaved = () => {
  const storage = getStorage();
  const userId = useRecoilValue(authAtoms.userUid);
  const [savedConfigurations, setConfigurations] = useRecoilState(
    configurationsAtoms.configurations,
  );

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
  const navigate = useNavigate();
  const [image, setImage] = useState('');

  function editSaved(saved: Configuration) {
    setConfName(saved.name);
    setConfYear(saved.year);
    setConfPrice(saved.price);
    setConfDate(saved.creationDate);
    setConfColor(saved.color);
    setConfInterior(saved.interior);
    setConfWheel(saved.wheel);
    navigate('/configuration/' + saved.name + '/summary');
  }

  async function deleteSaved(saved: Configuration) {
    await deleteDoc(
      doc(db, 'users', userId, 'configurations/' + saved.creationDate),
    );
    savedConfigurations.forEach((conf, creationDate) => {
      if (conf.creationDate === saved.creationDate) {
        setConfigurations(savedConfigurations.splice(creationDate, 1));
      }
    });
    setConfigurations(savedConfigurations);
  }

  async function getSavedConfiguration() {
    const confSnapshot = await getDocs(
      collection(db, 'users', userId, 'configurations'),
    );
    const confs: Configuration[] = [];
    confSnapshot.forEach((doc) => {
      confs.push({
        name: doc.data().name,
        year: doc.data().year,
        price: doc.data().price,
        creationDate: doc.data().creationDate,
        color: doc.data().color,
        wheel: doc.data().wheel,
        interior: doc.data().interior,
      });
    });
    setConfigurations(confs);
  }

  function getSideImage(saved: Configuration) {
    if (saved.name != '') {
      getDownloadURL(
        ref(
          storage,
          'images/' +
            saved.name +
            '/exteriors/' +
            saved.color.id +
            saved.wheel.id +
            '/3.png',
        ),
      )
        .then((url) => {
          setImage(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return image;
  }

  useEffect(() => {
    getSavedConfiguration();
  }, []);
  return {
    editSaved,
    savedConfigurations,
    deleteSaved,
    getSideImage,
  };
};
