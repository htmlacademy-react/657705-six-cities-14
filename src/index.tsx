import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app';

import { MockData } from './mock/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={MockData.placesCount} />
  </React.StrictMode>
);
