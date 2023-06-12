import { useCallback, useState } from 'react';

export const useToggle = (
  initialState = false,
): [boolean, (value?: boolean) => void] => {
  const [isToggle, setIsToggle] = useState<boolean>(initialState);
  const toggle = useCallback(
    (value?: boolean): void => {
      if (value === false || value) {
        setIsToggle(value);
      } else {
        setIsToggle((state) => {
          return !state;
        });
      }
    },
    [isToggle],
  );

  return [isToggle, toggle];
};
