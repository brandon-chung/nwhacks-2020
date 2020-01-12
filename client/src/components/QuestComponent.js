import React from 'react';
import Quest from './Quest';

class QuestComponent extends React.Component {
    render() {
        return (<div className="quest-component">
            <Quest user={this.props.user} type="Fitness" quest={this.props.quests.fitness} />
            <Quest user={this.props.user} type="Academic" quest={this.props.quests.academics} />
            <Quest user={this.props.user} type="Career" quest={this.props.quests.career} />
            <Quest user={this.props.user} type="Social" quest={this.props.quests.social} />
        </div>);
    }
}

export default QuestComponent;