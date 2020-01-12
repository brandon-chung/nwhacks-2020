import React from 'react';
import { Input } from 'semantic-ui-react'

class JournalForm extends React.Component {
    render() {
        return (
            <div className="diary-field">
                <Input
                fluid
                action={{
                color: 'blue',
                position: 'left',
                icon: 'plus',
                }}
                actionPosition='left'
                placeholder='What did you do today?'
                />
            </div>
        );
    }
}

export default JournalForm;