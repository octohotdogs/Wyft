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
      <div></div>
    );
  }
}

export default SessionsListItem;
