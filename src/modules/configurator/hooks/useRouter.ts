import { useCarModels } from 'modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useRouter = () => {
  const { cars } = useCarModels();
  const { carName } = useParams();
  const [isValid, setIsValid] = useState(true);

  function checkRoute() {
    const validRoute = cars.find(({ name }) => name === carName);
    if (!validRoute) {
      setIsValid(false);
    }
  }

  useEffect(() => {
    if (carName != '' && cars.length != 0) checkRoute();
  }, [cars, carName]);

  return isValid;
};
