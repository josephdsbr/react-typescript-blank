import React from 'react';
import './config/ReactotronConfig';
import './config/GoogleAnalytics';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import history from './services/history';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import light from './styles/theme/light';
import GlobalStyle from './styles/global';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { store, persistor } from './store';

import Route from './routes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Route />
            <GlobalStyle />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
