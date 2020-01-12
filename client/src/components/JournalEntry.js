import React from 'react';
import { Segment } from 'semantic-ui-react';

const style = {
    textAlign: "left",
    paddingBottom: '20px',
    fontSize: '20px'    
};

class JournalEntry extends React.Component {
    render() {
        return (
        <Segment>
            <div>
                <div className="diary-entry" style={style}>
                    <p><b>{this.props.entry.date}</b></p>
                    <p>{this.props.entry.text}</p>
                </div>
            </div>
        </Segment>);
    }
}

export default JournalEntry;