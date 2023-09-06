import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
            <ToastContainer/>
    <App />
  </React.StrictMode>
);
