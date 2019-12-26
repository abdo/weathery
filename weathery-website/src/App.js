import React, { useEffect, useState } from 'react';
import MainPage from './pages/main';
import { Spinner } from './common/styledComponents/spinner';

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  useEffect(() => {
    setAppLoaded(true);
  }, []);
  return (
    <>
      <Spinner isLoading={!appLoaded} />
      <MainPage />
    </>
  );
}

export default App;
