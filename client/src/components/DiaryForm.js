import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'

class DiaryForm extends React.Component {
    render() {
        return (
        <Form className="diary-form" noValidate autoComplete="off">
            <TextArea placeholder='What did you do today?'></TextArea>
            <Button>Add</Button>
        </Form>);
    }
}

export default DiaryForm;