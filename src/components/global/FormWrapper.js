import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #3d72b4;
    background-image: linear-gradient(#525252, #3d72b4);
    position: relative;
    z-index: 1;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    min-height: 500px;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    margin-top: 30px;
    margin-bottom: 50px;
`


const FormWrapper = ({ children, title }) => (
    <Container>
        <Card>
            <Title>{title}</Title>
            {children}
        </Card>
    </Container>
)

export default FormWrapper;