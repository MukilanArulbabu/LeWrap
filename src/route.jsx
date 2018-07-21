import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import StoreLocator from './components/storeLocator';
import FoodMenus from './components/foodmenu';
import ContactUs from './components/contactUs';
import Media from './components/Media';


const Main = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/menus" component={FoodMenus} />
    <Route path="/stores" component={StoreLocator} />
    <Route path="/media" component={Media} />
    <Route path="/contactus" component={ContactUs} />
  </div>
);

export default Main;

