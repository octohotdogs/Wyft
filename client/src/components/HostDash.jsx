import React from 'react';
import $ from 'jquery';
import HostDashAddHost from './HostDashAddHost.jsx';

class HostDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state is something in relation to props
    }
    this.createHost = this.createHost.bind(this);
  }


  createHost(host) {
    $.ajax({
      type: 'POST',
      url: '/api/hosts',
      data: JSON.stringify({data: host}),
      contentType: 'application/json',
      success: function(data){
        console.log(data)
      },
      error: function(err){
        console.log(err);
      }
    })
  }

  render() {
    return (
      <div>
        <h6>host dash here</h6>
        <HostDashAddHost createHost={this.createHost}/>
      </div>
    );
  }
}

export default HostDashboard;