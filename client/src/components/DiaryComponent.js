import React from 'react';
import DiaryEntry from './DiaryEntry'
import DiaryForm from './DiaryForm'

class DiaryComponent extends React.Component {
    render() {
        return (<div>
            <DiaryForm/>
            {
                this.props.entries.map((entry) => {
                    return <DiaryEntry entry={entry}/>
                })
            }
        </div>);
    }
}

export default DiaryComponent;