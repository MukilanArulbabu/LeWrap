import React from 'react';
import Maps from './googlemaps';

class Stores extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: [{
        id: 1,
        name: 'OMR Food Street',
        address: 'Shop No:C2B, OMR Food Street Guduvanchery, 20, GST Road, Guduvanchery, Chennai, Tamil Nadu 603203',
        center: {
          lat: 59.95,
          lng: 30.33,
        },
        zoom: 11,
      }, {
        id: 2,
        name: 'Velacherry',
        address: 'Shop No:C2B, OMR Food Street Guduvanchery, 20, GST Road, Guduvanchery, Chennai, Tamil Nadu 603203',
        center: {
          lat: 59.95,
          lng: 30.33,
        },
        zoom: 11,
      }, {
        id: 3,
        name: 'Ashok Nagar',
        address: 'Shop No:C2B, OMR Food Street Guduvanchery, 20, GST Road, Guduvanchery, Chennai, Tamil Nadu 603203',
        center: {
          lat: 59.95,
          lng: 30.33,
        },
        zoom: 11,
      }],
    };
  }
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-grid-custom">
          {this.state.stores.map(store => (
            <div className="mdl-card map-card mdl-shadow--3dp" key={store.id}>
              <Maps center={store.center} zoom={store.zoom} />
              <div className="mdl-card__supporting-text">
                <div className="headerText">
                  {store.name}
                </div>
                <div className="addressText">
                  {store.address}
                </div>
              </div>
            </div>
      ))}
        </div>
      </div>
    );
  }
}

export default Stores;
