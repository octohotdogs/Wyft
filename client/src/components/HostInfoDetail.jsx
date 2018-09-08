// when an individual host button is clicked on HostResultsList
  // HostInfoDetail renders that host's information:
    // availability
    // contact info
    // optional gift

import React from 'react';
import $ from 'jquery';
import SessionsAdd  from './SessionsAdd.jsx'
import {Link} from 'react-router-dom';

class HostInfoDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hostId: '',
			sessions: []
		}
	}

	componentDidMount(){
		var hostId = this.props.hostId;
		//console.log('did mount?')
		this.setState({hostId: hostId});
    $.get(`/api/hosts/${hostId}/sessions`, (data) => {      
      this.setState({sessions: data})
      console.log(data);
    }) 
	}

	render(){
		return(
			// TODO 
			// Create a sessionListItem component
			// Use .map to render all the Host sessions
			<div>
				<Link to={`/hosts/${this.state.hostId}/sessions/new`}>
					Add session
				</Link>
			</div>
		)
	}
}
export default HostInfoDetail;