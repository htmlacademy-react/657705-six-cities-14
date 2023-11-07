import { createAction } from '@reduxjs/toolkit';

import { TCityName } from '../types/city';
import { TOffer } from '../types/offer';
import { TAuthorizationStatus } from '../types/authorization';

export const changeCity = createAction<{ city: TCityName }>('changeCity');
export const loadOffers = createAction<TOffer[]>('data/loadOffers');
export const requireAuthorization = createAction<TAuthorizationStatus>('user/requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
