// when guest clicks search
// HostResultsList should populate

import React from 'react';
import SessionsList from './SessionsList.jsx';
import GoogleMapKit from './GoogleMapKit.jsx';
import { Form, Input, Button } from 'semantic-ui-react';
import { getGeocode } from './../../../helpers/google_map/google-map-search.js'

class GuestDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '', // enter address, go to google to get loclog
      guestLatLng: '',
      sessions: []
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      zipCode: e.target.value
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
        _this.setState({guestLatLng: guestLatLng});
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
        <input value={this.state.zipCode} onChange={this.onChange}></input>
        <button onClick={this.search}>search</button>
        <SessionsList data={this.state.sessions}/>
        <GoogleMapKit guestLatLng={this.state.guestLatLng}/>
        <Form>
          <Form.Field inline>
            <Input value={this.state.zipCode} onChange={this.onChange} />
            <Button onClick={this.search}>search</Button>
          </Form.Field>
        </Form>
        <SessionsList data={this.state.sessions} />
      </div>
    );
  }
}

export default GuestDashboard;
