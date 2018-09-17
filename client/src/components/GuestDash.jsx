// when guest clicks search
// HostResultsList should populate

import React from 'react';
import SessionsList from './SessionsList.jsx';
import GoogleMapKit from './GoogleMapKit.jsx';
import { Form, Input, Button } from 'semantic-ui-react';

class GuestDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      sessions: []
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      zipCode: e.target.value
    });
  }

  search() {
    this.props.searchZip(this.state.zipCode, data => {
      console.log(data);
      this.setState({ sessions: data });
    });
  }

  render() {
    return (
      <div>
        <h5>enter your zip code</h5>
        <input value={this.state.zipCode} onChange={this.onChange}></input>
        <button onClick={this.search}>search</button>
        <SessionsList data={this.state.sessions}/>
        <GoogleMapKit/>
        <Form>
          <Form.Field inline>
            <Input value={this.state.zipCode} onChange={this.onChange} />
            <Button onClick={this.search}>search</Button>
          </Form.Field>
        </Form>
        <SessionsList data={this.state.sessions} />
      </div>
    );
  }
}

export default GuestDashboard;
