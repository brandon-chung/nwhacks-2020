import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react'

const style = {
    marginTop: '2px',
    marginBottom: '2px',
    fontSize: '20px'    
}

class Quest extends React.Component {
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
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Quest;