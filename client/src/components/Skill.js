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
        const fitnessProgress = this.props.fitness.exp/this.props.fitness.next_level_exp * 100;
        const academicsProgress = this.props.academics.exp/this.props.academics.next_level_exp * 100;
        const careerProgress = this.props.career.exp/this.props.career.next_level_exp * 100;
        const socialProgress = this.props.social.exp/this.props.social.next_level_exp * 100;

        return (
        <div style={{textAlign: "left", paddingLeft: "15px", paddingTop: "20px"}}>
            <div id="fitness">
                <div>{this.getIcon("fitness")}</div>
                <div>
                    <div style={{float: "left"}}>Level: {this.props.fitness.level}</div>
                    <Progress percent={fitnessProgress} style={{width: "100%"}} progress>Fitness Level {this.props.fitness.level}</Progress>
                </div>
            </div>
            <div id="academics">
                <div>{this.getIcon("academics")}</div>
                <div>
                    <div>Level: {this.props.academics.level}</div>
                    <Progress percent={academicsProgress} style={{width: "100%"}} progress>Academics Level {this.props.academics.level}</Progress>
                </div>
            </div>
            <div id="career">
                <div>{this.getIcon("career")}</div>
                <div>
                    <div>Level: {this.props.career.level}</div>
                    <Progress percent={careerProgress} style={{width: "100%"}} progress>Career Level {this.props.career.level}</Progress>
                </div>
            </div>
            <div id="social">
                <div>{this.getIcon("social")}</div>
                <div>
                    <div>Level: {this.props.social.level}</div>
                    <Progress percent={socialProgress} style={{width: "100%"}} progress>Social Level {this.props.social.level}</Progress>
                </div>
            </div>
        </div>
        );
    }
}

export default Skill;
