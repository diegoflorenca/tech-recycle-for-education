import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import components
import Header from '../components/Header';
import Button from '../components/Button';

const Main = styled.main`
  height: calc(100vh - 191px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function App() {
  return (
    <div className="App">
      <Header title="Sobre" />
      <Main>
        <Link to="/">Home</Link>
        <div>
          <Button solid>Make the difference!</Button>
          <Button>Login</Button>
        </div>
      </Main>
    </div>
  );
}

export default App;
