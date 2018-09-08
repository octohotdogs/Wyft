import React from 'react';
import {Link} from 'react-router-dom';

class HostResultsListItem extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<Link to={`/hosts/${this.props.data.id}`} >
					<div>
						{this.props.data.FIRST_NAME}
					</div>
				</Link>
			</div>
		)
	}
}

export default HostResultsListItem;