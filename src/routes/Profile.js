import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

import api from 'api';
import background from 'assets/education.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Hero = styled.div`
    background: url(${background}) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 40vh;
`

const Card = styled.div`
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    box-shadow: 1px 10px 10px 5px rgba(0,0,0,0.2);
    border-radius:5px;
    position: relative;
    top: -100px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);
    position: relative;
    top: -75px
`

const FullName = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
`

const Title = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    color: #999;
`

const Email = styled.p`

`


const Profile = () => {
    const getData = res => res.data.data
    const [user, setUser] = useState({});
    useEffect(() => {
        api.get('/users/2').then(getData).then(setUser);
    }, [])

    return (
        <Container>
            <Hero />
            <Card>
                <Avatar src={user.avatar} alt={`profile picture of user ${user.first_name}`} />
                <FullName>{user.first_name} {user.last_name}</FullName>
                <Title>Student</Title>
                <Email>{user.email}</Email>
                <Link to="/result">
                    <Button size="lg" style={{ width: '200px', marginTop: '20px' }} variant="primary">
                        View Results
                    </Button>
                </Link>
            </Card>
        </Container>
    )
}

export default Profile;

