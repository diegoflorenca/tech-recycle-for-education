import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  height: 43px;
  width: 100%;
  font-size: 1em;
  color: var(--darkgray);
  border: none;
  outline: none;
  margin: 20px 0;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px var(--shadow1), 0px 4px 16px var(--shadow2);
`;

function input(props) {
  return <Input type="text" placeholder={props.placeHolder} />;
}

export default input;
