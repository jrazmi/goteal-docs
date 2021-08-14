import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { RoutedApp } from './RoutedApp';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RoutedApp />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


