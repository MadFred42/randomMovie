import { ReactNode } from 'react';

export type OwnProps = {
  type: 'rating' | 'genres' | 'type';
  values: string[];
  children: ReactNode;
};
