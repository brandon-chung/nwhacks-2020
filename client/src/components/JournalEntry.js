import React from 'react';
import Quest from './Quest';

class DiaryEntry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <div className="diary-entry">
                <p>{this.props.entry.date}</p>
                <p>{this.props.entry.text}</p>
            </div>
        </div>);
    }
}

export default DiaryEntry;