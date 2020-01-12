import React from 'react';

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.getIcon = this.getIcon.bind(this);
    }

    getIcon(skill) {
        switch(skill) {
            case "Fitness":
                return "F";
            case "Academic":
                return "A";
            case "Career":
                return "C";
            case "Social":
                return "S";
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