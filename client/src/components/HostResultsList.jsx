import React from 'react';
import HostResultsListItem from './HostResultsListItem.jsx';
//import HostInfoDetail from 'HostInfoDetail.jsx';

class HostResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableHosts : []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.availableHosts !== prevProps.availableHosts) {  
      this.setState({availableHosts: this.props.availableHosts});
    }
  }

  render() {
    return(
      <div>
        {          
          this.state.availableHosts.map(host => <HostResultsListItem key={host.id} data={host}/>)
        }
      </div>      
    )
    // renders list of individual Host buttons
    // each element in array is a button
      // when clicked
        // each button passes state to HostInfoDetail
          // which then renders individual host info
  }


}

export default HostResultsList;