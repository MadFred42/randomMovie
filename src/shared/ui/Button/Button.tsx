import { FC } from 'react';
import { OwnProps } from './types.ts';

export const Button: FC<OwnProps> = ({
  styleType,
  children,
  isDisabled,
  onClick,
}) => {
  return (
    <button onClick={onClick} disabled={isDisabled} className={styleType}>
      {children}
    </button>
  );
};
