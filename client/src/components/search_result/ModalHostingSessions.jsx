import React from 'react';
import { Button, Header, Icon, Modal, Image, Table } from 'semantic-ui-react'
import SessionTableRow from './sessionTableRow.jsx'

class ModalHostingSessions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			host: {},
			sections: []
		}
	}

  componentDidUpdate(prevProps) {
    if (this.props.selectedHost.street_address !== prevProps.selectedHost.street_address) {
      this.setState({ host: this.props.selectedHost, sections: this.props.selectedHost.sections });
    }
  }

	render() {
		return(
			<div>
        <Modal
          basic
          open={this.props.modalOpen}
          onClose={this.props.handleClose}
          size='small'
        >
        	<Modal.Header>Profile Picture</Modal.Header>
        	<Modal.Content image scrolling>
        		<Modal.Description>
							<p>{Math.round(this.state.host['distanceFromGuest'] * 10) / 10} miles away</p>
        			<p>Total available sessions: {this.state.sections.length}</p>
        			<Table compact='very'>
						    <Table.Header>
						      <Table.Row>
						        <Table.HeaderCell>Date</Table.HeaderCell>
						        <Table.HeaderCell>Start time</Table.HeaderCell>
						        <Table.HeaderCell>End time</Table.HeaderCell>
						        <Table.HeaderCell>Action</Table.HeaderCell>
						      </Table.Row>
						    </Table.Header>
						    <Table.Body>
						    	{
						    		this.state.sections.map(section => (
						    			<SessionTableRow
						    				key={section.id}
						    				section={section}
						    				handleSessionRequestClick={this.props.handleSessionRequestClick}
						    			>
						    			</SessionTableRow>
						    			))
						    	}
						    </Table.Body>
        			</Table>
        		</Modal.Description>
        	</Modal.Content>
        	<Modal.Actions>
        		 <Button basic color='green' onClick={this.props.handleClose}>
        		 	<Icon name='remove' /> Close
        		 </Button>
        	</Modal.Actions>
        </Modal>
			</div>
		)
	}
}

export default ModalHostingSessions;