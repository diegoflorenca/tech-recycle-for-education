import React from 'react';
import styled from 'styled-components';

// Import components
import Header from './components/Header';
import Button from './components/Button';

function App() {
  const Main = styled.main`
    height: calc(100vh - 191px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;

  const P = styled.p`
    width: 290px;
  `;

  return (
    <div className="App">
      <Header title="Welcome!" />
      <Main>
        <P>
          Each course contains video lectures, tasks, and text materials. All
          courses viewed by you are displayed in your personal account
        </P>
        <div>
          <Button solid>Make the difference!</Button>
          <Button>Login</Button>
        </div>
      </Main>
    </div>
  );
}

export default App;
