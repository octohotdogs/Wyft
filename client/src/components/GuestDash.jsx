import React from 'react';

class GuestDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      zipCode: e.target.value
    });
  }

  search() {
    this.props.searchZip(this.state.zipCode);
  }

  render() {
    return (<div>
      <h5>enter your zip code</h5>
      <input value={this.state.zipCode} onChange={this.onChange}></input>
      <button onClick={this.search}>search</button>
      </div>)
  }
}

export default GuestDashboard;