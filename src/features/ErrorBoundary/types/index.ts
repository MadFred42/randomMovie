import { ReactNode } from 'react';

export interface OwnProps {
  children?: ReactNode;
}

export interface OwnState {
  isError: boolean;
}
