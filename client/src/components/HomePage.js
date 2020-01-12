import React from 'react';
import JournalComponent from './JournalComponent'
import UserDetails from './UserDetails'
import { Grid } from 'semantic-ui-react'
import SignInPage from './SignInPage';

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
        this.getUser("", "");  // TODO: Add hard-coded name to get data
    }

    getUser(first_name, last_name) {
        fetch('/api/' + first_name + '/' + last_name, {
            method: 'get',
            header: 'application/json',     
        }).then(function(response) {
            this.setState(response.json());
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <SignInPage/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <UserDetails name={this.state.name} skills={this.state.character.skills}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JournalComponent
                            user={{first_name: this.state.name.substr(0, this.state.name.indexOf(' ')), last_name: this.state.name.substr(this.state.name.indexOf(' ') + 1, )}}
                            entries={this.state.journal_entries}
                            quests={{
                                fitness: this.state.character.skills.fitness.quest,
                                academics: this.state.character.skills.academics.quest,
                                career: this.state.character.skills.career.quest,
                                social: this.state.character.skills.social.quest
                            }}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default HomePage;