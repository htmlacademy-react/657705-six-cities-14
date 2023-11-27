import { TOffer } from './offer';

export type TCommentData = {
  offerId: TOffer['id'] | undefined;
  comment: string;
  rating: number;
};
