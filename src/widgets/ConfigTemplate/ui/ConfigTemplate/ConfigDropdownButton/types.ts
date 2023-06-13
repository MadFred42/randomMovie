import { MouseEvent } from 'react';

export interface OwnProps {
  isToggle: boolean;
  onClickHandler: (event: MouseEvent) => void;
}
