import React from 'react';
import Quest from './Quest';

class QuestComponent extends React.Component {
    render() {
        return (<div className="quest-component">
            <Quest type="Fitness" quest={this.props.quests.fitness} />
            <Quest type="Academic" quest={this.props.quests.academics} />
            <Quest type="Career" quest={this.props.quests.career} />
            <Quest type="Social" quest={this.props.quests.social} />
        </div>);
    }
}

export default QuestComponent;