import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Le Wrap Factorie',
    };
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
    if (url.hash === '#/home') {
      $('#home').addClass('set-active');
    } else if (url.hash === '#/menus') {
      $('#foodmenu').addClass('set-active');
    } else if (url.hash === '#/stores') {
      $('#stores').addClass('set-active');
    } else if (url.hash === '#/franchize') {
      $('#franchize').addClass('set-active');
    } else if (url.hash === '#/contactus') {
      $('#contactus').addClass('set-active');
    } else {
      $('#home').addClass('set-active');
    }
  }

  render() {
    return (
      <header className="mdl-layout__header mdl-layout--fixed-header-custom">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title mdl-layout-title_font">{this.state.title}</span>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          {this.activeTabs()}
          <Link to="/home" id="home" className="mdl-layout__tab mdl-layout__tab_font">Home</Link>
          <Link to="/menus" id="foodmenu" className="mdl-layout__tab mdl-layout__tab_font">Food Menu</Link>
          <Link to="/stores" id="stores" className="mdl-layout__tab mdl-layout__tab_font">Store Locator</Link>
          <Link to="/franchize" id="franchize" className="mdl-layout__tab mdl-layout__tab_font">Franchise with ME</Link>
          <Link to="/contactus" id="contactus" className="mdl-layout__tab mdl-layout__tab_font">Contact Us</Link>
        </div>
      </header>
    );
  }
}

export default header;
