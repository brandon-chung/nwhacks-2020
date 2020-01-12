import React from 'react';

class DiaryEntry extends React.Component {
    render() {
        return (<div>
            <p>{this.props.entry.date}</p>
            <p>{this.props.entry.text}</p>
        </div>);
    }
}

export default DiaryEntry;