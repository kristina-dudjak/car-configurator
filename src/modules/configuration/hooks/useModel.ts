import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { Car, CarItem } from 'modules/carSelect';
import { carAtoms } from 'modules/configuration';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { db } from '../../../firebase';

export const useModel = (name: string) => {
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
    const carModel: Car = {
      name: '',
      url: '',
      year: 0,
      price: 0,
      colors: [],
      wheels: [],
      interiors: [],
    };
    if (querySnapshot.exists()) {
      carModel.name = querySnapshot.data().name;
      carModel.url = querySnapshot.data().url;
      carModel.year = querySnapshot.data().year;
      carModel.price = querySnapshot.data().price;
      carModel.colors = await getSubcollection(name, 'colors');
      carModel.wheels = await getSubcollection(name, 'wheels');
      carModel.interiors = await getSubcollection(name, 'interiors');
    }
    setCar(carModel);
  }

  useEffect(() => {
    if (car.name != name) getModelByName(name);
  }, []);

  return car;
};
