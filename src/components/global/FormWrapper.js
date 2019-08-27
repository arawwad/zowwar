import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #0250c5;
    background: linear-gradient(bottom, #0250c5, #d43f8d);
    position: relative;
    z-index: 1;
`


const FormWrapper = ({ children, title }) => (
    <Container>{children}</Container>
)

export default FormWrapper;