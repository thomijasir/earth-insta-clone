// import 'react-app-polyfill/stable';
import React, { FC, useContext, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './services/Router';
import ClearCache from './ClearCache';
import AppProvider, { AppContext } from './store/AppProvider';
import LoadingGeneral from './components/LoadingGeneral/LoadingGeneral.comp';
import ErrorGeneral from './components/ErrorGeneral/ErrorGeneral.comp';
import './assets/app.scss';

const App: FC = () => {
  // ? SET FALSE IF YOU REQUIRED FETCH DATA BEFORE RENDER ROUTER
  const [appReady] = useState<boolean>(true);
  const context = useContext(AppContext);

  React.useEffect(() => {
    // * IT WILL USE IF APP REQUIRED FETCH DATA BEFORE RENDER CONTAINER
    // ? FOR SOME CASE THAT APP NEED TOKEN BEFORE RENDER
    if (window.innerWidth >= 400) {
      context.setLoading(false, '');
      context.setError(
        true,
        "Opps, screen doesn't support",
        'Please resize the screen under 400 pixel or open in small device.',
      );
    } else {
      setTimeout(() => {
        // MIMICKING ANIMATION INSTAGRAM
        context.setLoading(false, '');
      }, 1000);
    }
  }, []);

  // * MEMOIZE ROUTER CAN HELP INCREASE INDEX PERFORMANCE APP
  const renderRouter = useMemo(() => appReady && <Router />, [appReady]);

  return (
    <>
      <LoadingGeneral {...context.loadingState} />
      <ErrorGeneral {...context.errorState} />
      {renderRouter}
    </>
  );
};

ReactDOM.createRoot(
  document.getElementById('root') || document.createDocumentFragment(),
).render(
  <ClearCache>
    <AppProvider>
      <App />
    </AppProvider>
  </ClearCache>,
);
