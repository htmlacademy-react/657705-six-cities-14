import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../const';

import { useAppSelector } from '../hooks';
import PrivateRoute from '../components/private-route/private-route';
import Favorites from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import Main from '../pages/main/main';
import Offer from '../pages/offer/offer';
import LoadingScreen from '../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  //FIXME: Перенести в компоненты?
  if (isOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element={<Offer />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <b style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%)',
              fontSize: '30px',
              textAlign: 'center'
            }}
            >
              Когда нибудь тут будет красивая 404, впрочем, это уже совсем другая история
            </b>
          }
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
