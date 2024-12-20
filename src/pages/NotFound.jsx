// src/components/NotFound.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  background-color: #2c3e50;
  color: white;
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const HomeLink = styled(Link)`
  color: #f39c12;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: #e67e22;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Heading>404</Heading>
      <Message>Oops! The page you are looking for does not exist.</Message>
      <HomeLink to="/">Go to Home Page</HomeLink>
    </Container>
  );
};

export default NotFound;
