import React from 'react';
import styled from 'styled-components';

function header(props) {
  const Header = styled.header`
    text-align: right;
    margin-bottom: 20px;
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

  return (
    <Header>
      <Logo>TechRecycle</Logo>
      <Undertext>for education</Undertext>
      <Title>{props.title}</Title>
    </Header>
  );
}

export default header;
