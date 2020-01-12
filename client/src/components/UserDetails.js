import React from 'react';
import Skill from './Skill';

class UserDetails extends React.Component {
    render() {
        return (<div>
            {this.props.name}
            <Skill skill="Fitness" details={this.props.skills.fitness}/>
            <Skill skill="Academics" details={this.props.skills.academics}/>
            <Skill skill="Career" details={this.props.skills.career}/>
            <Skill skill="Social" details={this.props.skills.social}/>
        </div>);
    }
}

export default UserDetails;