import React from 'react';
import SearchResultListItem from './SearchResultItem.jsx';
import { Card } from 'semantic-ui-react';


class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({ data: this.props.data });
    }
  }

  render() {
    return (
      <Card.Group>
        {this.state.data.map(item => (
          <SearchResultListItem key={item.id} data={item} />
        ))}
      </Card.Group>
    );
  }
}

export default SearchResultList;