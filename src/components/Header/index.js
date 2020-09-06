import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: right;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const Logo = styled.h1`
  font-size: 2em;
  color: var(--green);
`;

const Undertext = styled.span`
  font-size: 1.15em;
  font-weight: bold;
  color: var(--primary);
`;

const Title = styled.h2`
  margin-top: 2em;
  text-align: left;
  color: var(--primary);
`;

function header(props) {
  return (
    <Header>
      <Logo>TechRecycle</Logo>
      <Undertext>for education</Undertext>
      <Title>{props.title}</Title>
    </Header>
  );
}

export default header;
