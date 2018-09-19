import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClickedHost = this.handleClickedHost.bind(this);
  }

  handleClickedHost() {
    this.props.getHosts();
  }

  render() {
    return (
      <Menu>
        <Menu.Item as={Link} to="/">
          Guest
        </Menu.Item>
        <Menu.Item as={Link} to="/hosts" onClick={this.handleClickedHost}>
          Hosts
        </Menu.Item>
        <Menu.Item as={Link} to="/host/new">
          New Host
        </Menu.Item>
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
