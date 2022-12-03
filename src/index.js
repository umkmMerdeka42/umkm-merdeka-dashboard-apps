import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import './index.css';
import 'tw-elements';
import axios from 'axios';

axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
