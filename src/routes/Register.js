import React, { useState, useContext } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormWrapper from 'components/global/FormWrapper'
import Toast from 'components/global/Toast';

import { FooterText, RegisterLink } from './Login';

import AuthContext from 'contexts/AuthContext';
import api from 'api';


//////////////////////////////////////////////////////


const Register = ({ history }) => {

    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showToast, setShowToast] = useState(false);

    const {setAuth} = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            api.post('/register', {
                email, password, confirmPassword
            })
                .then(() => {
                    setAuth(true)
                    history.push('/')
                })
                .catch(() => setShowToast(true))
        }

        setValidated(true);
    }

    return (
        <FormWrapper title="Register">
            <Toast show={showToast} setShow={setShowToast} />
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

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Confirm Password is required and should match password
                    </Form.Control.Feedback>
                </Form.Group>

                <Button size="lg" style={{ width: '100%', marginTop: '20px' }} variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

            <FooterText>Already a member? <RegisterLink to="/login">Login</RegisterLink></FooterText>

        </FormWrapper>
    )
}

export default Register;