import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;

  a {
    width: 209px;
    display: block;
    text-align: right;
    align-self: flex-end;
    text-decoration: none;
  }
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
  align-self: flex-start;
`;

function header(props) {
  return (
    <Header>
      <Link to="/">
        <Logo>TechRecycle</Logo>
        <Undertext>for education</Undertext>
      </Link>

      <Title>{props.title}</Title>
    </Header>
  );
}

export default header;
