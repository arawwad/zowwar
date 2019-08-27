import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
`

const Result = () => {

    const results = [
        { id: '1', subject: 'Maths', deg: '5', passed: true },
        { id: '2', subject: 'Arabic', deg: '2', passed: false },
        { id: '3', subject: 'Physics', deg: '7', passed: true },
        { id: '4', subject: 'English', deg: '9', passed: true },
        { id: '5', subject: 'Biology', deg: '3', passed: false },

    ]

    return (
        <Container>
            <Title>Exam Result</Title>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Degree</th>
                        <th>Passed</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.subject}</td>
                            <td>{row.deg}</td>
                            <td>{row.passed ? 'yes' : 'no'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Link to='/'><Button>Back to Profile</Button></Link>
        </Container>
    )
}

export default Result;