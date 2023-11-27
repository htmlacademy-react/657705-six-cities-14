import { THost } from './host';

export type TComment = {
  id: string;
  date: string;
  user: THost;
  comment: string;
  rating: number;
};
