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

    addPost(first_name, last_name, entry) {
        fetch('/api/journal-entry/' + first_name + '/' + last_name, {
            method: 'put',
            header: 'application/json',
            body: {
                journal_entry: entry
            }
        }).then(function(response) {
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }

    // TODO: get quest

    cancelQuest(first_name, last_name, quest_type) {
        fetch('/api/quest/'+ first_name + '/' + last_name + '/' + quest_type, {
            method: 'put',
            header: 'application/json'
        }).then(function(response) {
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div style={formStyle}>
                <Input
                    id="entry"
                    fluid
                    action={<Button color='blue' position='left' icon='plus' onClick={() => {
                        this.addPost(this.props.first_name, this.props.last_name, document.getElementById("entry").value);
                        this.setState({modalOpen: true});
                        document.getElementById("entry").value = "";
                    }}/>}
                    actionPosition='left'
                    placeholder='What did you do today?'
                />
                <Modal 
                    open={this.state.modalOpen} 
                    close={!this.state.modalOpen}
                >
                    <Header icon='trophy' content='New Quest!' />
                    <Modal.Content>
                    <p>
                        This should be some quest information!
                    </p>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='red' onClick={() => {
                        this.cancelQuest(this.props.first_name, this.props.last_name, this.props.quest_type);
                        this.setState({modalOpen: false});
                    }}>
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