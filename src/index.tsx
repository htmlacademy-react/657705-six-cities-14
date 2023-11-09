import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import { fetchCheckAuthAction, fetchOffersAction } from './store/api-actions';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchCheckAuthAction());
store.dispatch(fetchOffersAction());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
