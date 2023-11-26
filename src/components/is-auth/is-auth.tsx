import { ReactNode } from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/user/user-selector';

type TIsAuthProps = {
  authComponent: ReactNode;
  noAuthComponent: ReactNode;
}

function IsAuth({authComponent, noAuthComponent}: TIsAuthProps) {
  const authStatus = useAppSelector(selectAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return authStatus === AuthorizationStatus.Auth
    ? authComponent
    : noAuthComponent;
}

export default IsAuth;
