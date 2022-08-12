import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { CarItem } from 'modules/carSelect';
import { carAtoms } from 'modules/configuration';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { db } from '../../../firebase';

export const useModel = () => {
  const { name } = useParams();
  const [car, setCar] = useRecoilState(carAtoms.car);

  async function getSubcollection(carName: string, collectionName: string) {
    const q = query(collection(db, 'models/' + carName + '/' + collectionName));
    const querySnapshot = await getDocs(q);
    const carItems: CarItem[] = [];
    querySnapshot.forEach((doc) => {
      carItems.push({
        id: doc.id,
        price: doc.data().price,
        name: doc.data().name,
        thumbnail: doc.data().thumbnail,
      });
    });
    return carItems;
  }

  async function getModelByName(name: string) {
    const q = doc(db, 'models', name);
    const querySnapshot = await getDoc(q);
    if (querySnapshot.exists()) {
      setCar({
        name: querySnapshot.data().name,
        url: querySnapshot.data().url,
        year: querySnapshot.data().year,
        price: querySnapshot.data().price,
        colors: await getSubcollection(name, 'colors'),
        wheels: await getSubcollection(name, 'wheels'),
        interiors: await getSubcollection(name, 'interiors'),
      });
    }
  }

  useEffect(() => {
    if (name && car.name != name) getModelByName(name);
  }, []);

  return car;
};
