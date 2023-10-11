import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';



const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
        <App />
      </PersistGate>
    </Provider>
);
