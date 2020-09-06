import React from 'react';
import styled from 'styled-components';

// Import components
import Header from '../components/Header';
import Link from '../components/Link';
import Main from '../components/Main';

const P = styled.p`
  width: 290px;
  color: var(--primary);
`;

function Home() {
  return (
    <div>
      <Header title="Welcome!" />
      <Main>
        <P>
          Each course contains video lectures, tasks, and text materials. All
          courses viewed by you are displayed in your personal account
        </P>
        <div>
          <Link to="/map" className="solid">
            Make the difference!
          </Link>
          <Link to="/login" className="outline">
            Login
          </Link>
        </div>
      </Main>
    </div>
  );
}

export default Home;
