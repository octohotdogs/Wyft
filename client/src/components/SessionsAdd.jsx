import React from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import moment from 'moment';
import { Form, Button } from 'semantic-ui-react';
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';

class SessionsAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATE: '',
      START_TIME: '',
      END_TIME: '',
      hostId: '',
      redirect: false,
      redirect_path: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleChange(event, { name, value }) {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  onSubmit() {
    this.setState({ hostId: this.props.hostId });
    var $this = this;

    $.ajax({
      type: 'POST',
      url: `/api/hosts/${this.props.hostId}/sessions`,
      data: JSON.stringify({ DATE: this.state.DATE, START_TIME: this.state.START_TIME, END_TIME: this.state.END_TIME, hostId: this.state.hostId }),
      contentType: 'application/json',
      success: function(data) {
        //TODO redirect the page to host profile
        var path = `/hosts/${data.host_id}`;
        $this.setState({ redirect: true, redirect_path: path });
        //browserHistory.push(path);
        //this.props.history.push('/')
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  renderRedirect() {
    if (this.state.redirect) {
      var path = this.state.redirect_path;
      return <Redirect to={path} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Form>
          <Form.Group widths="equal">
            <DateInput
              name="DATE"
              placeholder="Date"
              value={this.state.DATE}
              iconPosition="left"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <TimeInput
              name="START_TIME"
              placeholder="Start time"
              value={this.state.START_TIME}
              onChange={this.handleChange}
            />
            <TimeInput
              name="END_TIME"
              placeholder="End time"
              value={this.state.END_TIME}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
        <Button onClick={this.onSubmit}>Submit</Button>
      </div>
    );
  }
}

export default SessionsAdd;
