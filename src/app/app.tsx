// import Favorites from '../layouts/favorites/favorites';
// import Login from '../layouts/login/login';
// import Offer from '../layouts/offer/offer';
import Main from '../layouts/main/main';

type AppProps = {
  placesCount: number;
};

function App({ placesCount }: AppProps): JSX.Element {
  return (
    <Main placesCount={placesCount} />
    // <Favorites />
    // <Offer />
    // <Login />
  );
}

export default App;
