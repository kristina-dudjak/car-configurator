import { setDoc, doc } from 'firebase/firestore';
import { authAtoms, configurationSelector } from 'modules';
import { useRecoilValue } from 'recoil';
import { db } from '../../../firebase';

export const useConfigurator = () => {
  const configuration = useRecoilValue(configurationSelector.configuration);
  const userId = useRecoilValue(authAtoms.userUid);
  async function saveConfiguration() {
    await setDoc(
      doc(db, 'users', userId, 'configurations/' + configuration.creationDate),
      {
        name: configuration.name,
        year: configuration.year,
        price: configuration.price,
        creationDate: configuration.creationDate,
        color: configuration.color,
        wheel: configuration.wheel,
        interior: configuration.interior,
      },
      { merge: true },
    );
  }
  return {
    saveConfiguration,
  };
};
