import React from 'react';
import DiaryComponent from './DiaryComponent'
import UserDetails from './UserDetails'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Test User",
            reddit_name: "Meh",
            diary_entries: [
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
                        'next_level_exp': 0
                    },
                    'academics': {
                        'level': 0,
                        'exp': 0,
                        'next_level_exp': 0
                    },
                    'career': {
                        'level': 0,
                        'exp': 0,
                        'next_level_exp': 0
                    },
                    'social': {
                        'level': 0,
                        'exp': 0,
                        'next_level_exp': 0
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
            <UserDetails name={this.state.name} skills={this.state.character.skills}/>
            <DiaryComponent entries={this.state.diary_entries}/>
        </div>);
    }
}

export default HomePage;