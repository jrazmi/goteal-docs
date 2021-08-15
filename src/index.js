import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { RoutedApp } from './RoutedApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider} from './components/providers/AppProvider';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AppProvider>
        <RoutedApp />
      </AppProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


