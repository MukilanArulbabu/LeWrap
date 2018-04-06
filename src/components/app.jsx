import React from 'react';
import Header from './header';
import Footer from './footer';
import Route from '../route';
import '../styles/custom.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.activeTabs = this.activeTabs.bind(this);
  }
  componentDidMount() {
    this.activeTabs();
  }
  activeTabs() {
    const urls = window.location.href;
    const url = new URL(urls);
    $('#home').removeClass('set-active');
    $('#foodmenu').removeClass('set-active');
    $('#stores').removeClass('set-active');
    $('#franchize').removeClass('set-active');
    $('#contactus').removeClass('set-active');
    if (url.pathname === '/home') {
      $('#home').addClass('set-active');
    } else if (url.pathname === '/menus') {
      $('#foodmenu').addClass('set-active');
    } else if (url.pathname === '/stores') {
      $('#stores').addClass('set-active');
    } else if (url.pathname === '/franchize') {
      $('#franchize').addClass('set-active');
    } else if (url.pathname === '/contactus') {
      $('#contactus').addClass('set-active');
    } else {
      $('#home').addClass('set-active');
    }
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        {this.activeTabs()}
        <div className="mdl-layout__content">
          <Route />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
