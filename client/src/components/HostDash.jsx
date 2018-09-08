import React from 'react';
import $ from 'jquery';
import HostDashAddHost from './HostDashAddHost.jsx';
import HostResultsList from './HostResultsList.jsx'

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
        <HostResultsList availableHosts={this.state.data}/>
      </div>
    );
  }
}

export default HostDashboard;