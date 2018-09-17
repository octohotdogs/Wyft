import React from 'react';
import {getGoogleMaps, setMapMarker} from './../../../helpers/google_map/google-map-client.js'


class GoogleMapKit extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      guestLatLng: {lat: 17.75, lng: 121.7333298},
      hostLatLngs: [{
            "id": 2,
            "street_address": "0 Portage Center",
            "lat": 38.9485485,
            "lng": 22.8400018
          }, {
            "id": 3,
            "street_address": "707 Springview Court",
            "lat": 14.5016958,
            "lng": 121.042743
          }, {
            "id": 4,
            "street_address": "1 Algoma Crossing",
            "lat": 59.2074685,
            "lng": 9.6105211
          }],
      map: '',
      clickedHost: ''
    }
    this.setupMap = this.setupMap.bind(this);
    this.setupHostMarkers = this.setupHostMarkers.bind(this);
	}

  componentDidMount() {
    // console.log(sectionsData)
    var _this = this;
    this.setupMap(function(){
      _this.setupHostMarkers();
    });
  }

  setupMap(cb) {
    var _this = this;
    getGoogleMaps('map', this.state.guestLatLng, function(map){
      _this.setState({map: map}, cb);
      setMapMarker(map, _this.state.guestLatLng, 'Guest');
    });
  }

  setupHostMarkers() {
    var hostLatLngs = this.state.hostLatLngs;
    var map = this.state.map;    
    for(var i = 0; i < hostLatLngs.length; i++) {
      var latLng = hostLatLngs[i];    
      setMapMarker(map, latLng, 'host', (hostMarker) => {
        console.log(hostMarker['street_address']);
      });
    }
  }

  render() {    
    return (
      <div id="map"></div>
    )
  }  
}

export default GoogleMapKit;