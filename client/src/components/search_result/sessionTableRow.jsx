import React from 'react';
import { Icon, Label, Menu, Table, Card, Button, Header } from 'semantic-ui-react';

class SessionTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidUpdate(prevProps){
  // 	if(this.props.data !== prevProps.data) {
  // 		this.setState({data: this.props.data});
  // 	}
  // onClick={this.handleClick}
  // }

  handleClick(){
    this.props.handleSessionRequestClick(this.props.section);
  }

  render() {
    return (
      <Table.Row key={this.props.section.id}>
        <Table.Cell>{this.props.section['DATE']}</Table.Cell>
        <Table.Cell>{this.props.section['START_TIME']}</Table.Cell>
        <Table.Cell>{this.props.section['END_TIME']}</Table.Cell>
        <Table.Cell>
         <Button onClick={this.handleClick}>Book</Button>          
        </Table.Cell>
      </Table.Row>     
    );
  }
}

export default SessionTableRow;
