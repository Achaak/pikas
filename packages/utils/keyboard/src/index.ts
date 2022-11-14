import { useEffect, useState } from 'react';

export const useKeyPress = (key: string) => {
  const [pressed, setPressed] = useState(false);

  const downHandler = ({ key: pressedKey }: KeyboardEvent) => {
    if (pressedKey === key) {
      setPressed(true);
    }
  };

  const upHandler = ({ key: releasedKey }: KeyboardEvent) => {
    if (releasedKey === key) {
      setPressed(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', downHandler, false);
    document.addEventListener('keyup', upHandler, false);

    return () => {
      document.removeEventListener('keydown', downHandler, false);
      document.removeEventListener('keyup', upHandler, false);
    };
  }, [key]);

  return pressed;
};
