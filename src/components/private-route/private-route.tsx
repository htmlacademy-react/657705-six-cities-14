import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { ReactNode } from 'react';

type TPrivateRouteProps = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  children: ReactNode;
};

function PrivateRoute({ authorizationStatus, children }: TPrivateRouteProps): ReactNode {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
