import React from 'react';
import JournalEntry from './JournalEntry';
import JournalForm from './JournalForm';
import { Tab } from 'semantic-ui-react';
import QuestComponent from './QuestComponent';
import StatsComponent from './StatsComponent';
import '../styles/JournalComponent.css';

const style = {
    fontSize: '20px'
}

class JournalComponent extends React.Component {
    render() {
        return (<div style={style}>
            <JournalForm rerenderParentCallback={this.props.rerenderParentCallback} user={this.props.user}/>
            <Tab
                panes={[
                { menuItem: 'Journal', render: () => 
                <Tab.Pane>
                    {
                        this.props.entries.map((entry) => {
                            return <JournalEntry entry={entry}/>
                        })
                    }
                </Tab.Pane> },
                { menuItem: 'Quests', render: () => 
                <Tab.Pane>
                    <QuestComponent rerenderParentCallback={this.props.rerenderParentCallback} user={this.props.user} quests={this.props.quests}/>
                </Tab.Pane> },
                { menuItem: 'Stats', render: () => 
                <Tab.Pane>
                    <StatsComponent/>
                </Tab.Pane> },
            ]} />
            
        </div>);
    }
}

export default JournalComponent;