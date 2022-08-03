import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { Car } from '../models';

export const useCarModels = () => {
  const [cars, setCars] = useState<Car[]>([]);

  async function getModels() {
    const querySnapshot = await getDocs(collection(db, 'models'));
    const carModels: Car[] = [];
    querySnapshot.forEach((doc) => {
      carModels.push({
        name: doc.data().name,
        year: doc.data().year,
        url: doc.data().url,
      });
    });
    setCars(carModels);
  }
  useEffect(() => {
    getModels();
  }, []);

  return cars;
};
