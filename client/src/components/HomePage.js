import React from 'react';
import DiaryComponent from './DiaryComponent'
import UserDetails from './UserDetails'
import Skill from './Skill'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Test User",
            reddit_name: "u/AndrewTong",
            twitter_name: "@andrewtong0",
            facebook_name: "Andrew Tong",
            diary_entries: [
                { text: "Something from database...",
                date: "Jan 11, 2019 12:33:00"}, 
                { text: "Something else from database...",
                date: "Jan 12, 2019 12:14:00"} 
            ],
            experience: 50,
            experience_to_next_level: 80,
            level: 67,
            character: {
                skills: {
                    fitness: {
                        level: 2,
                        exp: 30,
                        next_level_exp: 50
                    },
                    academics: {
                        level: 3,
                        exp: 65,
                        next_level_exp: 100
                    },
                    career: {
                        level: 0,
                        exp: 10,
                        next_level_exp: 20
                    },
                    social: {
                        level: 5,
                        exp: 90,
                        next_level_exp: 120
                    }
                }
            },
            'reddit_content': []
        }
    }

    componentDidMount() {
        // TODO: this.setState with MongoDB
    }

    render() {
        return (<div>
            <UserDetails
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
                fitness={this.state.character.skills.fitness}
                academics={this.state.character.skills.academics}
                career={this.state.character.skills.career}
                social={this.state.character.skills.social}
            >
            </Skill>
        </div>);
    }
}

export default HomePage;