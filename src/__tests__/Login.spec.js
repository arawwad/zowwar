import React from 'react'

import { render, fireEvent } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import Login from 'routes/Login';


const setup = () => {
    const utils = render(<Router><Login /></Router>)
    const emailInput = utils.getByTestId('email')
    const passwordInput = utils.getByTestId('password')
    const submitButton = utils.getByTestId('submit')

    return {
        emailInput,
        passwordInput,
        submitButton,
        ...utils,
    }
}


test('email Input is working correctly', () => {
    const { emailInput } = setup()
    fireEvent.change(emailInput, { target: { value: '23' } });
    expect(emailInput.value).toBe('23');
})

test('email invalid Input', () => {
    const { emailInput } = setup()
    fireEvent.change(emailInput, { target: { value: '23' } });
    expect(emailInput.checkValidity()).toBe(false);
})

test('email valid Input', () => {
    const { emailInput } = setup()
    fireEvent.change(emailInput, { target: { value: 'ar.awwad6@gmail.com' } });
    expect(emailInput.checkValidity()).toBe(true);
})

test('password Input is required', () => {
    const { passwordInput } = setup()
    expect(passwordInput.checkValidity()).toBe(false);
})

test('password Input is working correctly', () => {
    const { passwordInput } = setup()
    fireEvent.change(passwordInput, { target: { value: '23' } });
    expect(passwordInput.value).toBe('23');
})


test('password input is type password', () => {
    const { passwordInput } = setup()
    expect(passwordInput.type).toBe('password');
})


