import React from 'react';
import { Link } from 'react-router-dom';

class header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Le Wrap Factorie',
    };
  }


  render() {
    return (
      <header className="mdl-layout__header mdl-layout--fixed-header-custom">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title mdl-layout-title_font">{this.state.title}</span>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <Link to="/home" className="mdl-layout__tab mdl-layout__tab_font is-active">Home</Link>
          <Link to="/menus" className="mdl-layout__tab mdl-layout__tab_font">Food Menu</Link>
          <Link to="/stores" className="mdl-layout__tab mdl-layout__tab_font">Store Locator</Link>
          <Link to="/franchize" className="mdl-layout__tab mdl-layout__tab_font">Franchise with ME</Link>
          <Link to="/contactus" className="mdl-layout__tab mdl-layout__tab_font">Contact Us</Link>
        </div>
      </header>
    );
  }
}

export default header;
