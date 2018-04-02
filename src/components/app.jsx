import React from 'react';
import Header from './header';
import Footer from './footer';
import Route from '../route';
import '../styles/custom.scss';

const app = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <Route />
    <Footer />
  </div>
);

export default app;
