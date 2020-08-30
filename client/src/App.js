import React from 'react';
import Routes from 'routes';
import { Provider } from 'react-redux';
import { store } from 'store';
import ModalRoot from 'modals';

function App() {
  return (
    <Provider store={store}>
      <ModalRoot />
      <Routes />
    </Provider>
  );
}

export default App;
