import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import ScrollToTop from './utils/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

const APP = (
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
