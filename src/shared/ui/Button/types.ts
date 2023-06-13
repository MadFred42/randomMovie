import { MouseEvent, ReactNode } from 'react';

export interface OwnProps {
  styleType: string;
  children: ReactNode;
  isDisabled: boolean;
  onClick: (event: MouseEvent) => void;
}
