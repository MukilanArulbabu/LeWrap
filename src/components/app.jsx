import React from 'react';
import Header from './header';
import Footer from './footer';
import Route from '../route';
import '../styles/custom.scss';

const app = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <div className="mdl-layout__content-custom">
      <Route />
      <Footer />
    </div>
  </div>
);

export default app;
