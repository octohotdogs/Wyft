import React from 'react';
import HostDashAddHost from './HostDashAddHost.jsx';

class HostDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state is something in relation to props
    }
  }

  render() {
    return (
      <div>
        <h6>host dash here</h6>
        <HostDashAddHost />
      </div>
    );
  }
}

export default HostDashboard;