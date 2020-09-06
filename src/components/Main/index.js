import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  height: calc(100vh - 191px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function main(props) {
  return <Main>{props.children}</Main>;
}

export default main;
