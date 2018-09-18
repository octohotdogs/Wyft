import React from 'react';
import {getGoogleMaps, setMapMarker} from './../../../helpers/google_map/google-map-client.js'


class GoogleMapKit extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      guestLatLng: '',
      hostLatLngs: [],
      map: '',
      clickedHost: ''
    }    
    this.setupMap = this.setupMap.bind(this);
    this.setupHostMarkers = this.setupHostMarkers.bind(this);
	}

  // componentDidMount() {
  //   // console.log(sectionsData)
  //   var _this = this;
  //   this.setupMap(function(){
  //     _this.setupHostMarkers();
  //   });
  // }

  componentDidUpdate(prevProps){    
    var _this = this;
    if(this.props.guestLatLng !== prevProps.guestLatLng) {
      this.setState({guestLatLng: this.props.guestLatLng}, function(){
        _this.setupMap(function(){
          console.log('yey');
        });
      });
    }
    // update of sessions
    if(this.props.hostLatLngs !== prevProps.hostLatLngs) {
      this.setState({hostLatLngs: this.props.hostLatLngs}, function(){
        //console.log(this.props.hostLatLngs)
        _this.setupHostMarkers();
      })
    }
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
      setMapMarker(map, latLng, 'Host', (hostMarker) => {
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