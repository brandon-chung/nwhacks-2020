import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react'

const style = {
    marginTop: '2px',
    marginBottom: '2px'
}

class Quest extends React.Component {
    render() {
        return (
            <Segment>
                <Grid style={style}>
                    <Grid.Column width={2}>
                        <div>{this.props.type}</div>
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