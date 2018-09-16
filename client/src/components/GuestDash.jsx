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

    this.getUserLocation = this.getUserLocation.bind(this);
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
        userLocation: pos
      });  
    });
  }

  search() {
    //  TODO
    // search need to do 2 things
    // 1. get geo data from google -- improve this with autocomplete search
    // 2. go to our database to find matches
    var _this = this;

    getGeocode(this.state.zipCode, function(err, data) {
      if(err) {
        console.log(err);
      } else {      
        var guestLatLng = data.json.results[0].geometry.location;
        // TODO
        // use guestLatLng to find matches session from our database        
        _this.setState({guestLatLng: guestLatLng});
        // get addresses from db
        $.ajax({
          type: 'POST',
          url: '/api/guests/search',
          data: JSON.stringify({ guestLatLng: guestLatLng }),   
          contentType: 'application/json',
          success: function(data){
            _this.setState({hostLatLngs: data});
          },
          error: function(err){
            console.log(err);
          }      
        })
      }
    })
    // this.props.searchZip(this.state.zipCode, data => {
    //   console.log(data);
    //   this.setState({ sessions: data });
    // });
  }

  render() {
    return (
      <div>
        <h5>Enter address</h5>
        <Form>
          <Form.Field inline>
            <Input value={this.state.zipCode} onChange={this.onChange} />
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
