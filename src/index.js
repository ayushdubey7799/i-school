import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store';



const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ToastContainer />

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
