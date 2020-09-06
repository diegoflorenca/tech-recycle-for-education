import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  a {
    width: 100%;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    padding: 12px;
    margin: 20px 0;
    outline: none;

    display: block;
    box-shadow: 0px 4px 4px var(--shadow1), 0px 4px 16px var(--shadow2);
    transition: all 300ms ease-out;
  }

  a.solid {
    color: var(--secondary);
    background-color: var(--purple);

    :hover {
      opacity: 0.9;
    }
  }
  a.outline {
    color: var(--purple);
    border: 1px solid var(--purple);
    background-color: var(--secondary);
  }
`;

function link(props) {
  return (
    <Div>
      <Link className={props.className} to={props.to}>
        {props.children}
      </Link>
    </Div>
  );
}

export default link;
