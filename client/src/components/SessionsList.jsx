import React from 'react';

class SessionsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hide: true,
			data: []			
		}
	}

	componentDidUpdate(prevProps){
		if(this.props.data !== prevProps.data) {
			this.setState({data: this.props.data});
		}
	}

	render(){
		return (
			<div>Hello world {this.state.data.length}</div>
		)
	}
}
	
export default SessionsList;