import React from 'react';
import styled from 'styled-components';

function input(props) {
  const Input = styled.input`
    height: 56px;
    font-size: 1em;
    color: var(--darkgray);
    border: none;
    outline: none;
    margin: 20px 0;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px var(--shadow1), 0px 4px 16px var(--shadow2);
  `;

  return <Input type="text" placeholder={props.placeHolder} />;
}

export default input;
