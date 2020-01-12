import React from 'react';

class Quest extends React.Component {
    render() {
        return (<div className="quest-item" hidden={this.props.hidden}>
            {this.props.description}
        </div>);
    }
}

export default Quest;