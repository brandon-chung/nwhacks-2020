import React from 'react';
import { Grid, Segment, Icon, Button } from 'semantic-ui-react'

const style = {
    marginTop: '2px',
    marginBottom: '2px',
    fontSize: '20px'    
}

class Quest extends React.Component {
    
    finishQuest(first_name, last_name, quest_type) {
        fetch('http://localhost:5000/api/finish-quest/' + first_name + '/' + last_name + '/' + quest_type.toLowerCase(), {
            method: 'post',
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

    getIcon(skill) {
        switch(skill) {
            case "Fitness":
                return <Icon name='heartbeat' size='huge' color='red'/>;
            case "Academic":
                return <Icon name='book' size='huge' color='blue'/>;
            case "Career":
                return <Icon name='briefcase' size='huge' color='brown'/>;
            case "Social":
                return <Icon name='users' size='huge' color='yellow'/>;
            default:
                return <Icon name='users' size='question' color='black'/>;
        }
    }

    render() {
        if (this.props.quest) {
            return (
                <Segment>
                    <Grid style={style}>
                        <Grid.Column width={2}>
                            <div>{this.getIcon(this.props.type)}</div>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <div>{this.props.quest.description}</div>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <div><i>{this.props.quest.exp} XP</i></div>
                            <Button 
                                color="green" 
                                style={{marginTop: '24px'}}
                                onClick={() => {
                                    this.finishQuest(this.props.user.first_name, this.props.user.last_name, this.props.type)
                                }}
                            >
                                <Icon style={{marginRight: '0px'}} name="checkmark"/>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Segment>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Quest;