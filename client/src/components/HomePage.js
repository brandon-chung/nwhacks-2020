import React from 'react';
import JournalComponent from './JournalComponent'
import UserDetails from './UserDetails'
import { Grid } from 'semantic-ui-react'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Test User",
            reddit_name: "Meh",
            journal_entries: [
                { text: "Something from database...",
                date: "Jan 11, 2019 12:33:00"}, 
                { text: "Something else from database...",
                date: "Jan 12, 2019 12:14:00"} 
            ],
            character: {
                skills: {
                    fitness: {
                        'level': 0,
                        'exp': 0,
                        'next_level_exp': 0,
                        'quest': {
                            description: "Dummy quest1",
                            exp: 5
                        }
                    },
                    'academics': {
                        'level': 0,
                        'exp': 0,
                        'next_level_exp': 0,
                        'quest': {
                            description: "Dummy quest2",
                            exp: 5
                        }
                    },
                    'career': {
                        'level': 0,
                        'exp': 0,
                        'next_level_exp': 0,
                        'quest': {
                            description: "Dummy quest3",
                            exp: 5
                        }
                    },
                    'social': {
                        'level': 0,
                        'exp': 0,
                        'next_level_exp': 0,
                        'quest': {
                            description: "Dummy quest4",
                            exp: 5
                        }
                    }
                }
            },
            'reddit_content': [],
        }
    }

    componentDidMount() {
        // TODO: this.setState with MongoDB
    }

    render() {
        return (
            <Grid>
                <Grid.Column width={4}>
                    <UserDetails name={this.state.name} skills={this.state.character.skills}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <JournalComponent 
                        entries={this.state.journal_entries}
                        quests={{
                            fitness: this.state.character.skills.fitness.quest,
                            academics: this.state.character.skills.academics.quest,
                            career: this.state.character.skills.career.quest,
                            social: this.state.character.skills.social.quest
                        }}
                    />
                </Grid.Column>
            </Grid>
        );
    }
}

export default HomePage;