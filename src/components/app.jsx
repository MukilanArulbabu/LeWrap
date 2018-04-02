import React from 'react';
import Header from './header';
import ImageSlider from './imageSlider';
import Cards from './cards';

import '../styles/custom.scss';

const app = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <div className="mdl-layout__content">
      <ImageSlider />
      <Cards />
    </div>
  </div>
);

export default app;
