import React from 'react';
import styled from 'styled-components';

// Import logo component
import Header from './components/Header';

function App() {
  const P = styled.p`
    width: 290px;
  `;

  return (
    <div className="App">
      <Header title="Welcome!" />
      <P>
        Each course contains video lectures, tasks, and text materials. All
        courses viewed by you are displayed in your personal account
      </P>
    </div>
  );
}

export default App;
