import { TOffer } from './offer';

export type TCommentData = {
  offerId: TOffer['id'];
  comment: string;
  rating: number;
}
