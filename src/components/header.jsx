import React from 'react';

class header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Le Wrap Factorie',
    };
  }
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.state.title}</span>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <a href="#scroll-tab-1" className="mdl-layout__tab is-active">Food Menu</a>
          <a href="#scroll-tab-2" className="mdl-layout__tab">Store Locator</a>
          <a href="#scroll-tab-3" className="mdl-layout__tab">Franchise with ME</a>
          <a href="#scroll-tab-4" className="mdl-layout__tab">About ME</a>
          <a href="#scroll-tab-5" className="mdl-layout__tab">Contact Us</a>
        </div>
      </header>
    );
  }
}

export default header;
