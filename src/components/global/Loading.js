import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loading = () => (
    <Container>
        <Spinner animation="grow" />
    </Container>
);

export default Loading;