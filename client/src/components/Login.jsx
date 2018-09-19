import React from 'react';
// import { Form, Input, Button } from 'semantic-ui-react';
// implement using Semantic UI later!

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.doLogin = this.doLogin.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  doLogin() {
    console.log(this.state); // FIXME
  }

  updateField(e) {
    var newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        Username: <input id="username" onChange={this.updateField}></input>
        Password: <input id="password" onChange={this.updateField}></input>
        <button onClick={this.doLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
