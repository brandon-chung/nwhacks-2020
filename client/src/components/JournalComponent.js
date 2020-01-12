import React from 'react';
import JournalEntry from './JournalEntry'
import JournalForm from './JournalForm'
import { Tab } from 'semantic-ui-react'
import QuestComponent from './QuestComponent';

class JournalComponent extends React.Component {
    render() {
        return (<div>
            <b>Journal</b>
            <JournalForm/>
            <Tab panes={[
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
                    <QuestComponent quests={this.props.quests}/>
                </Tab.Pane> },
            ]} />
            
        </div>);
    }
}

export default JournalComponent;