import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;

export {selectAuthStatus};