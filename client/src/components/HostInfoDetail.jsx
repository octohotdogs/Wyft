// when an individual host button is clicked on HostResultsList
  // HostInfoDetail renders that host's information:
    // availability
    // contact info
    // optional gift

import React from 'react';
class HostInfoDetail extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<div>
				Hello world {this.props.hostId}
			</div>
		)
	}
}
export default HostInfoDetail;