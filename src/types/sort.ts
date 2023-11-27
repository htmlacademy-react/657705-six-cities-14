import { SortType } from '../const';

export type TSortType = keyof typeof SortType;
export type TSortTypeLabel = (typeof SortType)[keyof typeof SortType];
export type TSortingKeys = keyof Omit<typeof SortType, 'Popular'>;
