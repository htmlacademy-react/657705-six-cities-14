import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../const';

import PrivateRoute from '../components/private-route/private-route';
import Favorites from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import Main from '../pages/main/main';
import Offer from '../pages/offer/offer';
import IsAuth from '../components/is-auth/is-auth';
import HistoryRouter from '../components/history-router';
import browserHistory from '../browser-history';

function App(): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
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
          element={
            <IsAuth
              authComponent={<Navigate to={AppRoute.Main} />}
              noAuthComponent={<Login />}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
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
              <br />
              <br />
              <Link to={AppRoute.Main} style={{color: '#4481c3'}}>На главную</Link>
            </b>
          }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
