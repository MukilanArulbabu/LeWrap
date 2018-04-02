import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import StoreLocator from './components/storeLocator';
import ContactUs from './components/contactUs';
import Franchize from './components/franchize';


const Main = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/stores" component={StoreLocator} />
    <Route path="/franchize" component={Franchize} />
    <Route path="/contactus" component={ContactUs} />
  </div>
);

export default Main;

