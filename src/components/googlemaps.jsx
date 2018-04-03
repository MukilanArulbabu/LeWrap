import React from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center,
      zoom: this.props.zoom,
    };
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDLwVNM9GuCGRlCXUyenNmL8EdYzd6AK6E' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        />
      </div>
    );
  }
}

export default SimpleMap;
