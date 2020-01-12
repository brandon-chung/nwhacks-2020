import React from 'react';
import { Segment } from 'semantic-ui-react';

const style = {
    textAlign: "left",
    paddingBottom: '20px'
};

class JournalEntry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <Segment>
            <div>
                <div className="diary-entry" style={style}>
                    <p>{this.props.entry.date}</p>
                    <p>{this.props.entry.text}</p>
                </div>
            </div>
        </Segment>);
    }
}

export default JournalEntry;