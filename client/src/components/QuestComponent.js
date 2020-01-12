import React from 'react';
import Quest from './Quest';

class QuestComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="quest-component">
            <Quest rerenderParentCallback={this.props.rerenderParentCallback} user={this.props.user} type="Fitness" quest={this.props.quests.fitness} />
            <Quest rerenderParentCallback={this.props.rerenderParentCallback} user={this.props.user} type="Academic" quest={this.props.quests.academics} />
            <Quest rerenderParentCallback={this.props.rerenderParentCallback} user={this.props.user} type="Career" quest={this.props.quests.career} />
            <Quest rerenderParentCallback={this.props.rerenderParentCallback} user={this.props.user} type="Social" quest={this.props.quests.social} />
        </div>);
    }
}

export default QuestComponent;