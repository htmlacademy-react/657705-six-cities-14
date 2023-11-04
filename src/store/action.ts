import { createAction } from '@reduxjs/toolkit';
import { TCityName } from '../types/city';

export const changeCity = createAction<{ city: TCityName }>('changeCity');
