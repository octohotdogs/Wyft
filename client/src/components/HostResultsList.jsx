import React from 'react';
import HostInfoDetail from 'HostInfoDetail.jsx';

class HostResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableHosts : []
    }
  }


  render() {
    // renders list of individual Host buttons
    // each element in array is a button
      // when clicked
        // each button passes state to HostInfoDetail
          // which then renders individual host info
  }


}

export default HostResultsList;