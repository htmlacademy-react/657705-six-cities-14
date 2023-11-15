import { createSelector } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { sortByDate } from '../../utils/comment';

const selectSortedComments = createSelector(
  [(state: State) => state[NameSpace.Comments].all],
  (comments) => [...comments].sort(sortByDate).slice(0, 10)
);

export {
  selectSortedComments
};
