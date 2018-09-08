import React from 'react';
import SessionsListItem from './SessionsListItem.jsx';

class SessionsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
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
			<div>
				{
					this.state.data.map(item => <SessionsListItem key={item.id} data={item}/>)
				}
			</div>
		)
	}
}
	
export default SessionsList;