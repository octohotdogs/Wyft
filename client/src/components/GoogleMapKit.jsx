import React from 'react';
import {getGoogleMaps, setMapMarker} from './../../../helpers/google_map/google-map-client.js'

class GoogleMapKit extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      guestLatLng: {lat: -25.363, lng: 131.044},
      hostLatLngs: [],
      map: ''
    }
    this.setupMap = this.setupMap.bind(this);
    this.setupHostMarkers = this.setupHostMarkers.bind(this);
	}

  componentDidMount() {
    this.setupMap();
  }

  setupMap() {
    var _this = this;
    getGoogleMaps('map', this.state.guestLatLng, function(map){
      _this.setState({map: map});
      setMapMarker(map, _this.state.guestLatLng, 'Guest');
    });
  }

  setupHostMarkers() {
    var hostLatLngs = this.state.hostLatLngs;
    var map = this.state.map;    
    for(var i = 0; i < hostLatLngs.length; i++) {
      var latLng = hostLatLngs[i];
      setMapMarker(map, hostLatLngs, 'host');
    }
  }

  render() {    
    return (
      <div id="map"></div>
    )
  }  
}

export default GoogleMapKit;