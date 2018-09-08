import React from 'react';
import $ from 'jquery';
import HostDashAddHost from './HostDashAddHost.jsx';

class HostDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.data !== prevProps.data) {  
      this.setState({data: this.props.data});
    }
  }

  render() {
    return (
      <div>
        <h6>host dash here</h6>
        {this.state.data.length}
      </div>
    );
  }
}

export default HostDashboard;