import React from 'react';
import $ from 'jquery';

class SessionsAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DATE: '',
			START_TIME: '',
			END_TIME: '',
			hostId: ''
		}

		this.onChangeInput = this.onChangeInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

  onChangeInput(e){
  	var changedField = e.target.name;
  	var changedVal = e.target.value;
  	this.setState({[changedField]: changedVal});
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
		        <input 
		        	type="text"
		        	name="DATE"
		        	value={this.state.DATE}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>
	        <label>Start time
		        <input 
		        	type="text"
		        	name="START_TIME"
		        	value={this.state.START_TIME}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>	
	        <label>End time
		        <input 
		        	type="text"
		        	name="END_TIME"
		        	value={this.state.END_TIME}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>			      	      
				</form>
				<button onClick={this.onSubmit} >Submit</button>
			</div>
		);
	}
}

export default SessionsAdd;