import { THost } from './host';

type TComment = {
  id: string;
  date: string;
  user: THost;
  comment: string;
  rating: number;
}

export type {TComment};
