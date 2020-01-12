import React from 'react';
import { Icon } from 'semantic-ui-react'

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.getIcon = this.getIcon.bind(this);
    }

    getIcon(skill) {
        switch(skill) {
            case "Fitness":
                return <Icon name='heartbeat'/>;
            case "Academic":
                return <Icon name='book'/>;
            case "Career":
                return <Icon name='briefcase'/>;
            case "Social":
                return <Icon name='briefcase'/>;
            default:
                return "N";
        }
    }

    render() {
        return (<div>
            <div>{this.getIcon(this.props.skill)}</div>
            <div>Level: {this.props.details.level}</div>
            <div>EXP: {this.props.details.exp}</div>
        </div>);
    }
}

export default Skill;