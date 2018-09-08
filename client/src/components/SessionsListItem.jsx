import React from 'react';

class SessionsListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: ''			
		}
	}

	// componentDidUpdate(prevProps){
	// 	if(this.props.data !== prevProps.data) {
	// 		this.setState({data: this.props.data});
	// 	}
	// }

	render(){
		return (
			<div>
				<div>Date: {this.props.data.DATE}</div>
			</div>
		)
	}
}
	
export default SessionsListItem;