import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components';
import FormWrapper from 'components/global/FormWrapper'

import api from 'api';

/////////////////////////////////////////////////////////////

const FooterText = styled.p`

    position:absolute;
    bottom: 10px;
    font-weight: bold;

`

/////////////////////////////////////////////////////////////

const RegisterLink = styled(Link)`
    color: #000;
`

//////////////////////////////////////////////////////////////

const Login = () => {
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        api.post('/login', {
            email, password
        })
        .then(console.log)
        .catch(console.log)
    }

    return (
        <FormWrapper title="Login">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is not valid
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Password is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Button size="lg" style={{ width: '100%', marginTop: '20px' }} variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

            <FooterText>Are you new ? <RegisterLink to="/register">Register</RegisterLink></FooterText>
        </FormWrapper>
    )
}

export {Login as default, RegisterLink, FooterText};