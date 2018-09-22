// when guest clicks search
// HostResultsList should populate

import React from 'react';
import $ from 'jquery';
import GoogleMapKit from './GoogleMapKit.jsx';
import { Form, Input, Button, Grid, Divider, Segment } from 'semantic-ui-react';
import { getGeocode } from './../../../helpers/google_map/google-map-search.js'
import SearchResultList from './search_result/SearchResultList.jsx';
import ModalHostingSessions from './search_result/ModalHostingSessions.jsx';

class GuestDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '', // enter address, go to google to get loclog
      guestLatLng: '',
      sessions: [],
      hostLatLngs: [],
      selectedHost: '',
      modalOpen: false
    };

    this.getUserLocation = this.getUserLocation.bind(this);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleHostClick = this.handleHostClick.bind(this);
    this.handleSessionRequestClick = this.handleSessionRequestClick.bind(this);
    this.guestHostDistance = this.guestHostDistance.bind(this);
  }

  onChange(e) {
    this.setState({
      zipCode: e.target.value
    });
  }

  handleOpen(){
    this.setState({ modalOpen: true });
  }

  handleClose(){
    this.setState({ modalOpen: false });
  }  

  handleHostClick(host){
    this.setState({selectedHost: host, modalOpen: true});
  }

  handleSessionRequestClick(session){
    // TODO add endpoint to tell the server
    console.log(session)
  }

  getUserLocation() {
    let that = this;

    navigator.geolocation.getCurrentPosition(function(pos) {
      console.log(pos);
      that.setState({
        guestLatLng: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });

      that.findHosts(that, that.state.guestLatLng);
    }, function(err) {
      console.log('Location not found.');
    });
  }

  search() {
    // 1. get geo data from google -- improve this with autocomplete search
    // 2. go to our database to find matches
    var that = this;

    getGeocode(this.state.zipCode, function(err, data) {
      if(err) {
        console.log(err);
      } else {      
        var guestLatLng = data.json.results[0].geometry.location;
        that.setState({guestLatLng: guestLatLng});
        that.findHosts(that, guestLatLng);
      }
    });
  }

  findHosts(scope, guestLatLng) {
    $.ajax({
      type: 'POST',
      url: '/api/guests/search',
      data: JSON.stringify({ guestLatLng: guestLatLng }),
      contentType: 'application/json',
      success: function(data) {
        scope.guestHostDistance(data);
        scope.setState({hostLatLngs: data});
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  guestHostDistance(data) {
    let that = this;

    if (this.state.guestLatLng && data.length) {
      console.log('let\'s do the thing');
      console.log(data);

      const R = 6371 // Radius of earth in km
      const kmPerMile = 0.62137119;

      data.forEach(function(host) {
        let dLat = deg2rad(host.LAT - that.state.guestLatLng.lat);
        let dLng = deg2rad(host.LNG - that.state.guestLatLng.lng);

        let a = Math.pow(Math.sin(dLat / 2), 2) + 
                Math.cos(deg2rad(that.state.guestLatLng.lat)) * Math.cos(deg2rad(host.LAT)) *
                Math.pow(Math.sin(dLng / 2), 2)
                ;

        let c = 2 * Math.atan(Math.sqrt(a), Math.sqrt(1 - a));
        let distance = (R * c) * kmPerMile;

        host.distanceFromGuest = distance;
      });

      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }
    }
  }

  render() {
    return (
      <div>
        <h5>Enter address</h5>
        <Form>
          <Form.Field inline>
            <Input value={this.state.zipCode} onChange={this.onChange} /><br />
            <Button onClick={this.getUserLocation}>find near me</Button>
            <Button onClick={this.search}>search</Button>
          </Form.Field>
        </Form>
        <Button onClick={this.handleOpen}>Open</Button>
        <Divider />
        <Grid>
          <Grid.Column width={16}>
            <GoogleMapKit 
              guestLatLng={this.state.guestLatLng} 
              hostLatLngs={this.state.hostLatLngs}
              handleHostClick={this.handleHostClick}              
            />
          </Grid.Column>                                       
        </Grid>
        <ModalHostingSessions 
          modalOpen={this.state.modalOpen} 
          handleClose={this.handleClose}
          selectedHost={this.state.selectedHost} 
          handleSessionRequestClick={this.handleSessionRequestClick}
        />   
      </div>
    );
  }
}

export default GuestDashboard;
