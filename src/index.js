import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './store/state';

import App from './App';

const app = (
  <StateProvider>
    <App />
  </StateProvider>
);

ReactDOM.render(app, document.getElementById('root'));
