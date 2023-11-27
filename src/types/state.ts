import { LoadingStatus } from '../const';
import { store } from '../store/store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TLoadingStatus = (typeof LoadingStatus)[keyof typeof LoadingStatus];
