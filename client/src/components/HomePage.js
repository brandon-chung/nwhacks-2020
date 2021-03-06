import React from 'react';
import JournalComponent from './JournalComponent'
import UserDetails from './UserDetails'
import Skill from './Skill'
import { Grid } from 'semantic-ui-react'
import SignInPage from './SignInPage';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
        this.getUser = this.getUser.bind(this);
        this.setState = this.setState.bind(this);
        this.state = {
            name: "Andrew Tong",
            reddit_name: "u/AndrewTong",
            twitter_name: "@andrewtong0",
            facebook_name: "Andrew Tong",
            journal_entries: [
                { text: "Something from database...",
                date: "Jan 11, 2019 12:33:00"},
                { text: "Something else from database...",
                date: "Jan 12, 2019 12:14:00"}
            ],
            experience: 0,
            experience_to_next_level: 100,
            level: 1,
            character: {
                skills: {
                    fitness: {
                        level: 0,
                        exp: 0,
                        next_level_exp: 50,
                        quest: {
                            description: "Dummy quest1",
                            exp: 5
                        }
                    },
                    academics: {
                        level: 3,
                        exp: 65,
                        next_level_exp: 100,
                        quest: {
                            description: "Dummy quest2",
                            exp: 5
                        }
                    },
                    career: {
                        level: 0,
                        exp: 10,
                        next_level_exp: 20,
                        quest: {
                            description: "Dummy quest3",
                            exp: 5
                        }
                    },
                    social: {
                        level: 5,
                        exp: 90,
                        next_level_exp: 120,
                        quest: {
                            description: "Dummy quest4",
                            exp: 5
                        }
                    }
                }
            },
            'reddit_content': [],
        }
    }

    rerenderParentCallback() {
        this.getUser("Andrew", "Tong");
        this.forceUpdate();
    }

    componentDidMount() {
        this.getUser("Andrew", "Tong");   // HARD-CODED
    }

    getUser(first_name, last_name) {
        fetch('http://localhost:5000/api/' + first_name + '/' + last_name, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => {this.setState({
                name: data.name,
                reddit_name: data.reddit_name,
                journal_entries: data.journal_entries,
                character: data.character,
                reddit_content: data.reddit_content,
                experience:
                    this.state.character.skills.fitness.exp +
                    this.state.character.skills.academics.exp +
                    this.state.character.skills.career.exp +
                    this.state.character.skills.social.exp,
                level:
                    this.state.character.skills.fitness.level +
                    this.state.character.skills.academics.level +
                    this.state.character.skills.career.level +
                    this.state.character.skills.social.level
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <SignInPage rerenderParentCallback={this.rerenderParentCallback} user={{first_name: this.state.name.substr(0, this.state.name.indexOf(' ')), last_name: this.state.name.substr(this.state.name.indexOf(' ') + 1, ), reddit_name: this.state.reddit_name.substr(this.state.reddit_name.indexOf('/') + 1, )}}/>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                      <UserDetails
                          rerenderParentCallback={this.rerenderParentCallback}
                          experience={this.state.experience}
                          experience_to_next_level={this.state.experience_to_next_level}
                          level={this.state.level}
                          name={this.state.name}
                          reddit_name={this.state.reddit_name}
                          twitter_name={this.state.twitter_name}
                          facebook_name={this.state.facebook_name}
                          skills={this.state.character.skills}
                      />
                      <p></p>
                      <Skill
                          rerenderParentCallback={this.rerenderParentCallback}
                          fitness={this.state.character.skills.fitness}
                          academics={this.state.character.skills.academics}
                          career={this.state.character.skills.career}
                          social={this.state.character.skills.social}
                      >
                      </Skill>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JournalComponent
                            rerenderParentCallback={this.rerenderParentCallback}
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
