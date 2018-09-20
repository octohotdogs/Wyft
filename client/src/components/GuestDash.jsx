// when guest clicks search
// HostResultsList should populate

import React from 'react';
import $ from 'jquery';
import SearchResultList from './search_result/SearchResultList.jsx';
import GoogleMapKit from './GoogleMapKit.jsx';
import { Form, Input, Button, Grid, Divider } from 'semantic-ui-react';
import { getGeocode } from './../../../helpers/google_map/google-map-search.js'

class GuestDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '', // enter address, go to google to get loclog
      guestLatLng: '',
      sessions: [],
      hostLatLngs: []
    };

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      zipCode: e.target.value
    });
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
    // this.props.searchZip(this.state.zipCode, data => {
    //   console.log(data);
    //   this.setState({ sessions: data });
    // });
  }

  findHosts(scope, guestLatLng) {
    $.ajax({
      type: 'POST',
      url: '/api/guests/search',
      data: JSON.stringify({ guestLatLng: guestLatLng }),
      contentType: 'application/json',
      success: function(data) {
        scope.setState({hostLatLngs: data});
      },
      error: function(err) {
        console.log(err);
      }
    });
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
        <Divider />
        <Grid>
          <Grid.Column width={12}>
            <GoogleMapKit guestLatLng={this.state.guestLatLng} hostLatLngs={this.state.hostLatLngs}/>
          </Grid.Column>          
          <Grid.Column width={4}>
            <SearchResultList data={this.state.hostLatLngs} />
          </Grid.Column>                    
        </Grid>                 
      </div>
    );
  }
}

export default GuestDashboard;
