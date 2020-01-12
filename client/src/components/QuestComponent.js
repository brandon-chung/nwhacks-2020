import React from 'react';
import Quest from './Quest';

class QuestComponent extends React.Component {
    render() {
        return (<div className="quest-component">
            <b>Quests</b>
            {
                this.props.quests.map((quest) => {
                    return <Quest description={quest.description} exp={quest.exp}/>;
                })
            }
        </div>);
    }
}

export default QuestComponent;