import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectAuthStatus = (state: State) =>
  state[NameSpace.User].authorizationStatus;

const selectUserEmail = (state: State) => state[NameSpace.User].email;

export { selectAuthStatus, selectUserEmail };
