import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Link from '../components/Link';

function question() {
  return (
    <div>
      <Header title="you want to donate or receive donations?" />
      <Main>
        <div>
          <Link to="/signup-school" className="solid">
            School
          </Link>
          <Link to="/signup-donator" className="solid">
            Donator
          </Link>
        </div>
      </Main>
    </div>
  );
}

export default question;
