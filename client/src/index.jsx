
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GuestDashboard from './components/GuestDash.jsx';
// import HostDash from './components/HostDashboard.jsx';
// import COMPONENT from './components/COMPONENTNAME.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // how do we set state with
        // hosts
        // guests
    }
  }

  searchZipCodes(zipCode) {
    // ajax GET
    // takes in a string? or a number?

    // guest puts their zip code in the input, clicks 'search' button

    // returns a list of hosts with the same zip code

    $.ajax({
      type: 'GET',
      url: '',
      data: JSON.stringify({ 'data' : zipCode }),
      contentType: 'application/json',

      success: function(data) {
        console.log('🌸 client/src/index.jsx');
        // on success
          // returns a list of hosts with matching zip codes
      },

      error: function(err) {
        console.log('🤮 client/src/index.jsx');
        // potentional error, no matching zipcodes?

        // returns a notification along the lines of
          // "Either we messed up or you have a very lonely zip code. Regardless, we're sorry!"

      }
    });

  }

  addHost(avail, zip, contact, gift) {
    // ajax POST

    // takes four strings
      // availability
      // zip code (DOES THIS BEING A NUMBER MAKE SEARCH EASIER)
      // contact info
      // optional gift

    // a successful post results in a notification in brower window
      // ex. "Thank you for hosting!"

  //   $.ajax({
  //     type: 'POST',
  //     url: '',
  //     data: JSON.stringify({
  //       'availability' : avail,
  //       'zip'          : zip,
  //       'contactInfo'  : contact,
  //       'gift'         : gift
  //     }),

  //     success: function(data) {

  //     },

  //     error: function(err) {

  //     }
  //   })
  }

  render() {
    // default is Guest dashboard
      // Guest MVP is a page with an input with a `search` button
        // includes a button to switch to 'Host' dashboard
      // Host MVP is a page with four inputs (availability, zip code, contact info, optional gift) and a `submit` button
        // includes a button to switch to 'Guest' dashboard
    return (<div>
              <h1>wyft</h1>
                <h4>your friend with wifi</h4>

            </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));