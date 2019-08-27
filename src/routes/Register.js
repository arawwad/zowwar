import React from 'react';
import FormWrapper from 'components/global/FormWrapper'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {

    return (
        <FormWrapper title="Register">
            <Form>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button size="lg" style={{width: '100%', 'margin-top': '20px'}} variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </FormWrapper>
    )
}

export default Register;