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
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title mdl-layout-title_font">{this.state.title}</span>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <Link to="/home" id="home" className="mdl-layout__tab">Home</Link>
          <Link to="/menus" id="foodmenu" className="mdl-layout__tab">Food Menu</Link>
          <Link to="/stores" id="stores" className="mdl-layout__tab">Stores</Link>
          <Link to="/franchize" id="franchize" className="mdl-layout__tab">Franchise</Link>
          <Link to="/contactus" id="contactus" className="mdl-layout__tab">Contact Us</Link>
        </div>
      </header>
    );
  }
}

export default header;
