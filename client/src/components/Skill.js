import React from 'react';
import { Progress } from 'semantic-ui-react'
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
            case "Academics":
                return <Icon name='book'/>;
            case "Career":
                return <Icon name='briefcase'/>;
            case "Social":
                return <Icon name='users'/>;
            default:
                return <Icon name='question'/>;
        }
    }

    render() {
        const fitnessProgress = this.props.fitness.exp/this.props.fitness.next_level_exp * 100;
        const academicsProgress = this.props.academics.exp/this.props.academics.next_level_exp * 100;
        const careerProgress = this.props.career.exp/this.props.career.next_level_exp * 100;
        const socialProgress = this.props.social.exp/this.props.social.next_level_exp * 100;

        return (
        <div style={{textAlign: "left", paddingLeft: "15px", paddingTop: "20px"}}>
            <div id="fitness">
                <div>{this.getIcon("Fitness")}</div>
                <div>
                    <Progress percent={fitnessProgress} style={{width: "100%"}}>Fitness Level {this.props.fitness.level}</Progress>
                </div>
            </div>
            <div id="academics">
                <div>{this.getIcon("Academics")}</div>
                <div>
                    <Progress percent={academicsProgress} style={{width: "100%"}}>Academics Level {this.props.academics.level}</Progress>
                </div>
            </div>
            <div id="career">
                <div>{this.getIcon("Career")}</div>
                <div>
                    <Progress percent={careerProgress} style={{width: "100%"}}>Career Level {this.props.career.level}</Progress>
                </div>
            </div>
            <div id="social">
                <div>{this.getIcon("Social")}</div>
                <div>
                    <Progress percent={socialProgress} style={{width: "100%"}}>Social Level {this.props.social.level}</Progress>
                </div>
            </div>
        </div>
        );
    }
}

export default Skill;
