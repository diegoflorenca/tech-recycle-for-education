import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Input from '../components/Input';
import Link from '../components/Link';

function login() {
  return (
    <div>
      <Header title="You already has a login?" />
      <Main>
        <div>
          <Input placeHolder="Your email" />
          <Input placeHolder="Your password" />
          <Link to="/map" className="solid">
            Enter
          </Link>
        </div>
        <Link to="/question" className="outline">
          Sign Up
        </Link>
      </Main>
    </div>
  );
}

export default login;
