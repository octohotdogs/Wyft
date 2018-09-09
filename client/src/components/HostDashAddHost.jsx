import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class HostDashAddHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      streetNum: '',
      streetName: '',
      zip: '',
      userName: '',
      password: '',
      optional: ''
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput(e) {
    var changedField = e.target.name;
    var changedVal = e.target.value;
    this.setState({ [changedField]: changedVal });
  }

  onSubmit() {
    this.props.addHost(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      streetNum: '',
      streetName: '',
      zip: '',
      userName: '',
      password: '',
      optional_details: ''
    });
  }

  render() {
    return (
      <div>
        <h5>Add New Host</h5>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              required
              fluid
              label="First Name:"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChangeInput}
            />
            <Form.Input
              required
              fluid
              label="Last Name:"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChangeInput}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              required
              fluid
              label="Street Number"
              type="number"
              name="streetNum"
              value={this.state.streetNum}
              onChange={this.onChangeInput}
            />
            <Form.Input
              required
              fluid
              label="Street Name"
              type="text"
              name="streetName"
              value={this.state.streetName}
              onChange={this.onChangeInput}
            />
            <Form.Input
              required
              fluid
              label="zip"
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.onChangeInput}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              required
              fluid
              label="UserName"
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.onChangeInput}
            />
            <Form.Input
              required
              fluid
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
            <Form.Input
              fluid
              label="Optional"
              type="text"
              name="optional"
              value={this.state.optional}
              onChange={this.onChangeInput}
            />
          </Form.Group>
          <Form.Button onClick={this.onSubmit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default HostDashAddHost;
