import React from 'react';
import { Icon, Label, Menu, Table, Card, Button, Header, Modal } from 'semantic-ui-react';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      modalOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // componentDidUpdate(prevProps){
  // 	if(this.props.data !== prevProps.data) {
  // 		this.setState({data: this.props.data});
  // 	}
  // }

  handleOpen(){
    this.setState({ modalOpen: true });
  }

  handleClose(){
    this.setState({ modalOpen: false });
  } 

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.data['street_address']}</Card.Header>
          <Card.Meta>1 Miles</Card.Meta>
          <Card.Description>
            Total available sections: {this.props.data['sections'].length}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal
            trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
            <Header icon='browser' content='Cookies policy' />
            <Modal.Content>
              <h3>This website uses cookies to ensure the best user experience.</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleClose} inverted>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>        
        </Card.Content>
      </Card>
    );
  }
}

export default SearchResultItem;
