import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app';

import { mockData } from './mock/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={mockData.placesCount} />
  </React.StrictMode>
);
