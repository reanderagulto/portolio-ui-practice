import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Router from './routes';
import '@assets/scss/main.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
