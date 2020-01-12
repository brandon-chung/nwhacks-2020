import React from 'react';
import { Input, Modal, Button, Header, Icon } from 'semantic-ui-react'

const formStyle = {
    marginBottom: '50px'
}

class JournalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            quest: {
                description: "Nevermind!",
                exp: 0
            }
        }
    }

    addPost(first_name, last_name, entry) {
        fetch('http://localhost:5000/api/journal-entry/' + first_name + '/' + last_name, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                journal_entry: entry
            })
        }).then(function(response) {
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }

    getUser(first_name, last_name) {
        fetch('http://localhost:5000/api/' + first_name + '/' + last_name, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(function(response) {
            this.setState(response.json());
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }

    cancelQuest(first_name, last_name, quest_type) {
        fetch('http://localhost:5000/api/quest/'+ first_name + '/' + last_name + '/' + quest_type, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
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
                        let type = this.addPost(this.props.user.first_name, this.props.user.last_name, document.getElementById("entry").value);
                        let quest;
                        if (this.getUser(this.props.user.first_name, this.props.user.last_name)) {
                            quest = this.getUser(this.props.user.first_name, this.props.user.last_name).character.skills[type].quest;
                            this.setState({modalOpen: true, quest: quest});
                        } else {
                            this.setState({modalOpen: true, quest: this.state.quest})
                        }
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
                        {this.state.quest.description}
                    </p>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='red' onClick={() => {
                        this.cancelQuest(this.props.user.first_name, this.props.user.last_name, this.props.quest_type);
                        this.setState({modalOpen: false, quest: this.state.quest});
                    }}>
                        <Icon name='remove' /> Decline
                    </Button>
                    <Button color='green' onClick={() => {this.setState({modalOpen: false, quest: this.state.quest})}}>
                        <Icon name='checkmark' /> Accept
                    </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default JournalForm;