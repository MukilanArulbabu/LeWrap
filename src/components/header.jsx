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
          <img src="/public/images/background/lewrapHeader.png" className="mdl-layout-title_lewrap" />
          {/* <span className="mdl-layout-title mdl-layout-title_font">{this.state.title}</span> */}
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <Link to="/home" id="home" className="mdl-layout__tab mdl-button-custom-font">Home</Link>
          <Link to="/menus" id="foodmenu" className="mdl-layout__tab mdl-button-custom-font">Food Menu</Link>
          <Link to="/stores" id="stores" className="mdl-layout__tab mdl-button-custom-font">Stores</Link>
          <Link to="/franchize" id="franchize" className="mdl-layout__tab mdl-button-custom-font">Franchise</Link>
          <Link to="/contactus" id="contactus" className="mdl-layout__tab mdl-button-custom-font">Contact Us</Link>
        </div>
      </header>
    );
  }
}

export default header;
