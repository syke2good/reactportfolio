import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
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

const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>Get in touch</Title>
      <Description>
        If you have any questions ?
        </Description>
      <Button>Contact me</Button>
    </ContactContainer>
  );
}

export default Contact;
