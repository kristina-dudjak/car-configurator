import { CarItem, useModel } from 'modules';
import { useEffect, useState } from 'react';
import { EditedItem } from 'shared';

export const useEditing = () => {
  const [editing, setEditing] = useState<EditedItem>(EditedItem.None);
  const [items, setItems] = useState<CarItem[]>([]);
  const car = useModel();

  useEffect(() => {
    switch (editing) {
      case EditedItem.Color:
        setItems(car.colors);
        break;
      case EditedItem.Wheel:
        setItems(car.wheels);
        break;
      case EditedItem.Interior:
        setItems(car.interiors);
        break;
    }
  }, [editing]);

  return {
    setEditing,
    editing,
    items,
  };
};
