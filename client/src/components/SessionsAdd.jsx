import React from 'react';
import $ from 'jquery';
import moment from 'moment';
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
			DATE: new Date(),
			START_TIME: new Date(),
			END_TIME: new Date(),
			hostId: ''
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}


  handleChange(event, {name, value}){
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  onSubmit(){
  	this.setState({hostId: this.props.hostId});
  	console.log(this.state);
  	$.ajax({
  		type: 'POST',
  		url: `/api/hosts/${this.props.hostId}/sessions`,
  		data: JSON.stringify({data: this.state}),
  		contentType: 'application/json',
	      success: function(data) {	      	
	      	//TODO redirect the page to host profile
	        console.log(data);
	      },
      error: function(err) {
      	console.log(err);
      }  		
  	})
  }

	render() {
		return(
			<div>
				<form>				
	        <label>Date
					<DateInput
	          name="DATE"
	          placeholder="Date"
	          value={this.state.DATE}
	          iconPosition="left"
	          onChange={this.handleChange} />	
		      </label><br/>
	        <label>Start time
		        <TimeInput 
		        	name="START_TIME"
		        	value={this.state.START_TIME}
		        	onChange={this.handleChange}
		        />
		      </label><br/>	
	        <label>End time
		        <TimeInput 
		        	name="END_TIME"
		        	value={this.state.END_TIME}
		        	onChange={this.handleChange}
		        />
		      </label><br/>			      	      
				</form>
				<button onClick={this.onSubmit} >Submit</button>
			</div>
		);
	}
}

export default SessionsAdd;