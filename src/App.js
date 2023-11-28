import React from 'react';

import { AppShell, AppShellProvider } from 'juno-ui-components';
import StoreProvider, { useGlobalsActions } from './components/StoreProvider';
import { Router } from 'url-state-router';

import AppContent from './AppContent';
import styles from './styles.scss';

/* IMPORTANT: Replace this with your app's name */
const URL_STATE_KEY = 'cronus';
/* --------------------------- */

const App = (props = {}) => {
  const { setUrlStateKey, setTokenData } = useGlobalsActions();

  // on app initial load save Endpoint and URL_STATE_KEY so it can be
  // used from overall in the application
  React.useEffect(() => {
    // set to empty string to fetch local test data in dev mode
    setUrlStateKey(URL_STATE_KEY);

    // Call the function assign it to a global variable via Zustand
    window[props.getTokenFnName]().then((data) => {
      setTokenData(data);
    });
  }, []);

  return (
    <AppShell
      pageHeader="Converged Cloud | Cronus App"
      embedded={props.embedded === 'true' || props.embedded === true}
    >
      <AppContent props={props} />
    </AppShell>
  );
};

const StyledApp = (props) => {
  return (
    <AppShellProvider theme={`${props.theme ? props.theme : 'theme-light'}`}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <StoreProvider>
        <Router stateID={'CRONUS'}>
          <App {...props} />
        </Router>
      </StoreProvider>
    </AppShellProvider>
  );
};

export default StyledApp;
