// when an individual host button is clicked on HostResultsList
  // HostInfoDetail renders that host's information:
    // availability
    // contact info
    // optional gift

import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import SessionsAdd  from './SessionsAdd.jsx'
import SessionsList from './SessionsList.jsx';

class HostInfoDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hostId: '',
			error: false,
			error_msg: '',
			sessions: []
		}
	}

	componentDidMount(){
		var hostId = this.props.hostId;
		//console.log('did mount?')
		this.setState({hostId: hostId});
    $.get(`/api/hosts/${hostId}/sessions`, (data) => {   
    	if (!data.error) {
    		this.setState({sessions: data, error: false})
    	} else {
    		this.setState({error_msg: data.error.msg, error: true})
    	}
      console.log(data);
    })
	}

	render(){
		let page;
		if(this.state.error) {
			page = 	<p>{this.state.error_msg}</p>;			
		} else {
			page = <SessionsList data={this.state.sessions}/>;
		}
		return(
			// TODO 
			// Create a sessionListItem component
			// Use .map to render all the Host sessions
			<div>								
				<Link to={`/hosts/${this.state.hostId}/sessions/new`}>
					Add session
				</Link>
				{page}
			</div>
		)
	}
}
export default HostInfoDetail;