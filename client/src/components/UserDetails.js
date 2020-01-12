import React from 'react';
import { CircularProgressbar  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'semantic-ui-react';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const orangeColour = "rgb(238, 104, 83)";

        return (
        <div id="userDetails"style={{paddingTop: "10px"}}>
            <div id="name_and_level">
                <div style={{width: "20%", float: "left"}}>
                    <CircularProgressbar
                        value={this.props.experience}
                        maxValue={this.props.experience_to_next_level}
                        text={`${this.props.level}`}
                        styles={buildStyles({
                            pathTransition: 'none',
                            pathColor: orangeColour,
                            textColor: orangeColour,
                            textSize: "40px"
                        })}
                    />
                </div>
            <h3 style={{fontSize: "39px", marginBottom: "2px", textAlign: "left", paddingLeft: "80px"}}>{this.props.name}</h3>
            </div>
            <div id="social_info" style={{float: "left", textAlign: "left", paddingLeft: "10px"}}>
                <p style={{marginTop: "0px", marginBottom: "0px"}}>{this.props.reddit_name}, {this.props.facebook_name}</p>
            </div>
        </div>);
    }
}

export default UserDetails;