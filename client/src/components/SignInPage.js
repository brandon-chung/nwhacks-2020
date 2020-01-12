import React from 'react';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        }
    }

    createUser(first_name, last_name, reddit_name) {
        fetch('http://localhost:5000/api/create-account', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                reddit_name: reddit_name
            })
        }).then(function (response) {
            return response.json();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (<div hidden={this.state.hidden}>
            First Name:
            <input id="first_name" value={this.props.user.first_name}></input>
            Last Name:
            <input id="last_name" value={this.props.user.last_name}></input>
            Reddit Name:
            <input id="reddit_name" value={this.props.user.reddit_name}></input>
            <button onClick={() => {
                this.createUser(document.getElementById("first_name").value, document.getElementById("last_name").value, document.getElementById("reddit_name").value);
                this.setState({hidden: true});
                this.props.rerenderParentCallback();
            }}
            >
                Register
            </button>
        </div>);
    }
}

export default SignInPage;