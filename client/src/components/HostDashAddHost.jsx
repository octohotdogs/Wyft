import React from 'react';

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
    }

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput(e){
  	var changedField = e.target.name;
  	var changedVal = e.target.value;
  	this.setState({ [changedField]: changedVal});
  }

  onSubmit(){
  	console.log(this.state);
  	this.props.createHost(this.state);
  }

  render() {
    return (
      <div>
        <h6>add new host</h6>
        <form>
	        <label>First Name:
		        <input 
		        	type="text"
		        	name="firstName"
		        	value={this.state.firstName}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>
	        <label>Last Name:
		        <input 
		        	type="text"
		        	name="lastName"
		        	value={this.state.lastName}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>
	        <label>Street Number:
		        <input 
		        	type="number"
		        	name="streetNum"
		        	value={this.state.streetNum}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>
	        <label>Street Name:
		        <input 
		        	type="text"
		        	name="streetName"
		        	value={this.state.streetName}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>
	        <label>Zip:
		        <input 
		        	type="text"
		        	name="zip"
		        	value={this.state.zip}
		        	onChange={this.onChangeInput}
		        />
		      </label><br/>
	        <label>userName:
		        <input 
		        	type="text"
		        	name="userName"
		        	value={this.state.userName}
		        	onChange={this.onChangeInput}
		        />
		      </label>
		      <br/>
	        <label>password:
		        <input 
		        	type="password"
		        	name="password"
		        	value={this.state.password}
		        	onChange={this.onChangeInput}
		        />
		      </label>
		      <br/>
	        <label>optional:
		        <input 
		        	type="text"
		        	name="optional"
		        	value={this.state.optional}
		        	onChange={this.onChangeInput}
		        />
		      </label>		      
		    </form>
		    <button onClick={this.onSubmit} >Submit</button>
      </div>
    );
  }  
}

export default HostDashAddHost;