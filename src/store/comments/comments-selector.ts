import { createSelector } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { sortByDate } from '../../utils/comment';

const selectSortedComments = createSelector(
  [(state: State) => state[NameSpace.Comments].all],
  (comments) => [...comments].sort(sortByDate).slice(0, 10)
);

const selectCommentsCount = (state: State) => state[NameSpace.Comments].all.length;

const selectLoadingStatus = (state: State) => state[NameSpace.Comments].submittingStatus;

export {
  selectSortedComments,
  selectLoadingStatus,
  selectCommentsCount
};
