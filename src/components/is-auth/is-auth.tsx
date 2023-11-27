import { ReactNode } from 'react';

import { AuthorizationStatus } from '../../const';
import { selectAuthStatus } from '../../store/user/user-selector';
import { useAppSelector } from '../../hooks/useAppSelector';

type TIsAuthProps = {
  authComponent: ReactNode;
  noAuthComponent: ReactNode;
};

function IsAuth({ authComponent, noAuthComponent }: TIsAuthProps) {
  const authStatus = useAppSelector(selectAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return authStatus === AuthorizationStatus.Auth
    ? authComponent
    : noAuthComponent;
}

export default IsAuth;
