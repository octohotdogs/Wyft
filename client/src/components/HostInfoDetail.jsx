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

	componentDidMount(){
		console.log(this.props.hostId);
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