import React from 'react';
import DiaryEntry from './DiaryEntry'
import DiaryForm from './DiaryForm'
import UserDetails from './UserDetails'

class HomePage extends React.Component {
    render() {
        return (<div>
            <UserDetails/>
            <DiaryForm/>
            <DiaryEntry/>
        </div>);
    }
}

export default HomePage;