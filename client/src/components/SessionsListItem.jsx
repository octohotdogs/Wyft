import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

class SessionsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  // componentDidUpdate(prevProps){
  // 	if(this.props.data !== prevProps.data) {
  // 		this.setState({data: this.props.data});
  // 	}
  // }

  render() {
    return (
      // <div>Date: {this.props.data.DATE}</div>
      <Table celled>
        {/* <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header> */}

        <Table.Body>
          <Table.Row>
            <Table.Cell>{this.props.data.DATE}</Table.Cell>
            <Table.Cell>{this.props.data.START_TIME}</Table.Cell>
            <Table.Cell>{this.props.data.END_TIME}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default SessionsListItem;
