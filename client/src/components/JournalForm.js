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
        this.addPost = this.addPost.bind(this);
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
        }).then((response) => {
            console.log(response)
            return response.text();
        }).then((type) => {
            this.props.rerenderParentCallback();
            type = type.replace(/(\n|")/gm, "");
            if (type === "null") {
                this.setState({modalOpen: false, quest: {description: ""}});
            }
            else {
                this.setState({modalOpen: true, quest: this.props.quests[type]});
            }
            console.log(type);
        }).then(() => {
            this.props.rerenderParentCallback();
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
        }).then(() => {
            this.props.rerenderParentCallback();
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
                        this.addPost(this.props.user.first_name, this.props.user.last_name, document.getElementById("entry").value)
                        document.getElementById("entry").value = "";
                        this.props.rerenderParentCallback();
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
                        Mystery quest!
                        {/*{this.state.quest.description}*/}
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