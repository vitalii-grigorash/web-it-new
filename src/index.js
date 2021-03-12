import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './utils/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <ScrollToTop />
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
