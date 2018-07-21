import React from 'react';
import Maps from './googlemaps';
import Title from './titleHeader';
import '../styles/store.scss';

class Stores extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: [{
        id: 1,
        name: 'Harrington Road',
        address: '#74, Harrington Road,Chetpet,Chennai-31',
        center: {
          lat: 13.0707775,
          lng: 80.2298869,
        },
        zoom: 11,
      }, {
        id: 2,
        name: 'Alwarpet',
        address: '#50, CP Ramaswamy Iyer road, Alwarpet, Chennai-18',
        center: {
          lat: 13.031678,
          lng: 80.2546247,
        },
        zoom: 11,
      }, {
        id: 3,
        name: 'Velachery',
        address: '#13, Velachery Rd, Dhadeswaram Nagar, Velachery, Chennai-600042',
        center: {
          lat: 12.9846413,
          lng: 80.220817,
        },
        zoom: 11,
      }, {
        id: 4,
        name: 'Guduvanchery',
        address: '#20, Grand Southern Trunk (GST) Road, Guduvanchery, Chennai-603203',
        center: {
          lat: 12.8499529,
          lng: 80.0629272,
        },
        zoom: 11,
      }, {
        id: 5,
        name: 'Perungudi',
        address: '#D20, OMR Food Street,MGR Main Rd, Kandancavadi, Perungudi,Chennai-600096',
        center: {
          lat: 12.8499436,
          lng: 79.9950759,
        },
        zoom: 11,
      }, {
        id: 6,
        name: 'Ambattur',
        address: '#B17, OMR Food Street, Telephone Exchange stop, Ambattur Industrial Estate, Chennai-600053',
        center: {
          lat: 12.849925,
          lng: 79.9950758,
        },
        zoom: 11,
      }, {
        id: 7,
        name: 'Ramapuram',
        address: '#45, River View Road, Parthasarathy Nagar, Manapakkam, Ramapuram Chennai-600125',
        center: {
          lat: 13.0166538,
          lng: 80.1831556,
        },
        zoom: 11,
      }, {
        id: 8,
        name: 'Ambur',
        address: '#10 NH48, Ambur, Vellore District, Somalapuram, Tamil Nadu 635802',
        center: {
          lat: 20.7542678,
          lng: 73.048026,
        },
        zoom: 11,
      }],
    };
  }
  render() {
    return (
      <div className="mdl-grid">
        <div>
          <div className="store-header mdl-shadow--8dp">
            <span className="store-title mdl-layout-title_font"> Our Stores </span>
          </div>
          <div className="mdl-grid-custom-stores mdl-shadow--8dp">
            {this.state.stores.map((store) => {
              const MapUrl = `https://www.google.com/maps/search/?api=1&query=${store.center.lat},${store.center.lng}`;
              return (
                <div className="mdl-card map-card mdl-shadow--3dp" key={store.id}>
                  <Maps center={store.center} zoom={store.zoom} />
                  <div className="mdl-card__supporting-text mdl-card__supporting-custom-Height">
                    <div className="headerText">
                      {store.name}
                    </div>
                    <div className="addressText">
                      {store.address}
                    </div>
                  </div>
                  <div className="mdl-card__actions mdl-card--border mdl-card-color">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-store-font-color" target="_blank" href={MapUrl}>
                      Start <i className="material-icons">near_me</i>
                    </a>
                  </div>
                </div>
      );
      })}
          </div>
        </div>
      </div>
    );
  }
}

export default Stores;
