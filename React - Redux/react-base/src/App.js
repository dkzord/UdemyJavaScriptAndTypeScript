import React from 'react';
import Login from './pages/Login';
import Header from './components/Header';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Login />
    </>
  );
}

export default App;
