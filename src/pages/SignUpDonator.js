import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Input from '../components/Input';
import Link from '../components/Link';

function signUpDonator() {
  return (
    <div>
      <Header title="We are very pleased to welcome a new donator!" />
      <Main>
        <div>
          <Input placeHolder="Name" />
          <Input placeHolder="Email" />
          <Input placeHolder="Password" />
          <Input placeHolder="Phone number" />
          <Link to="/map" className="solid">
            Submit
          </Link>
        </div>
      </Main>
    </div>
  );
}

export default signUpDonator;
