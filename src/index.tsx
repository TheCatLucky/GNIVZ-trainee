import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContext, themes } from './components/context/ThemeContext';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext.Provider value={themes.light}>
        <App />
      </ThemeContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
