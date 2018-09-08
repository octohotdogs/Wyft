import React from 'react';

class HostResultsListItem extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<div>
					{this.props.data.FIRST_NAME}
				</div>
			</div>
		)
	}
}

export default HostResultsListItem;