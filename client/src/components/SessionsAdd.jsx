import React from 'react';

class SessionsAdd extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Hello world {this.props.hostId}</h2>
			</div>
		);
	}
}

export default SessionsAdd;