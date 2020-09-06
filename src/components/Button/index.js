import React from 'react';
import styled from 'styled-components';

function button(props) {
  const sharedStyles = styled.button`
    height: 44px;
    width: 100%;
    border: none;
    border-radius: 4px;
    margin: 20px 0;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    box-shadow: 0px 4px 4px var(--shadow1), 0px 4px 16px var(--shadow2);
    transition: all 300ms ease-out;
  `;

  const SolidButton = styled(sharedStyles)`
    color: var(--secondary);
    background-color: var(--purple);

    :hover {
      opacity: 0.9;
    }
  `;

  const OutlineButton = styled(sharedStyles)`
    color: var(--purple);
    border: 1px solid var(--purple);
    background-color: var(--secondary);
  `;

  if (props.solid) {
    return <SolidButton>{props.children}</SolidButton>;
  } else {
    return <OutlineButton>{props.children}</OutlineButton>;
  }
}

export default button;
