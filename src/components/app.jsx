import React from 'react';
import Header from './header';
import Footer from './footer';
import Route from '../route';
import PopUp from './modal';
import '../styles/custom.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.activeTabs = this.activeTabs.bind(this);
  }
  componentDidMount() {
    this.activeTabs();
    this.setState({ openModal: true });
  }

  onOfferClick = () => {
    this.setState({ openModal: false });
  }

  activeTabs() {
    const urls = window.location.href;
    const url = new URL(urls);
    $('#home').removeClass('set-active');
    $('#foodmenu').removeClass('set-active');
    $('#stores').removeClass('set-active');
    $('#media').removeClass('set-active');
    $('#contactus').removeClass('set-active');
    $('#franchise').removeClass('set-active');
    $('#offers').removeClass('set-active');
    if (url.pathname === '/home') {
      $('#home').addClass('set-active');
      $('#f1').show();
      $('#f2').hide();
    } else if (url.pathname === '/menus') {
      $('#foodmenu').addClass('set-active');
      $('#f1').show();
      $('#f2').hide();
    } else if (url.pathname === '/stores') {
      $('#stores').addClass('set-active');
      $('#f1').show();
      $('#f2').hide();
    } else if (url.pathname === '/media') {
      $('#media').addClass('set-active');
      $('#f1').show();
      $('#f2').hide();
    } else if (url.pathname === '/contactus') {
      $('#contactus').addClass('set-active');
      $('#f1').show();
      $('#f2').hide();
    } else if (url.pathname === '/franchise') {
      $('#franchise').addClass('set-active');
      $('#f1').show();
      $('#f2').hide();
    } else if (url.pathname === '/offers') {
      $('#offers').addClass('set-active');
      $('#f1').hide();
      $('#f2').show();
    } else {
      $('#home').addClass('set-active');
      $('#f1').hide();
      $('#f2').show();
    }
  }

  render() {
    return (
      <>
        {this.state.openModal ? (<PopUp onOfferClick={this.onOfferClick} />) : (null)}
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          {this.activeTabs()}
          <div className="mdl-layout__content">
            <Route />
            <div id="f1"><Footer /></div>
          </div>
          <div id="f2"><Footer /></div>
        </div>
      </>
    );
  }
}

export default App;
