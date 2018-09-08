import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
		this.handleClickedHost = this.handleClickedHost.bind(this);
	}

	handleClickedHost() {
		this.props.getHosts();
	}

	render() {
		return(
			<div>
				<ul>
					<li>
						<Link to="/">Guest</Link>
					</li>
					<li>
						<Link to="/hosts" onClick={this.handleClickedHost}>Hosts</Link>
					</li>					
					<li>
						<Link to="/host/new">New Host</Link>
					</li>
				</ul>
			</div>
		)
	}
}


export default Navigation;