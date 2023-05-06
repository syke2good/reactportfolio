import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 6rem);
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #666;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to my portfolio!</Title>
      <Description>
        I am a full-stack developer with experience in React, Node.js, and
        MongoDB.
      </Description>
    </HomeContainer>
  );
}

export default Home;
