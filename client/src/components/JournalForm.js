import React from 'react';
import { Input, Modal, Button, Header, Icon } from 'semantic-ui-react'

const formStyle = {
    marginBottom: '50px'
}

class JournalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    render() {
        return (
            <div style={formStyle}>
                <Input
                    fluid
                    action={<Button color='blue' position='left' icon='plus' onClick={() => {
                        this.setState({modalOpen: true});
                    }}/>}
                    actionPosition='left'
                    placeholder='What did you do today?'
                />
                <Modal 
                    open={this.state.modalOpen} 
                    close={!this.state.modalOpen}
                    closeIcon
                >
                    <Header icon='trophy' content='New Quest!' />
                    <Modal.Content>
                    <p>
                        This should be some quest information!
                    </p>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='red' onClick={() => {this.setState({modalOpen: false})}}>
                        <Icon name='remove' /> Decline
                    </Button>
                    <Button color='green' onClick={() => {this.setState({modalOpen: false})}}>
                        <Icon name='checkmark' /> Accept
                    </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default JournalForm;