import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Input from '../components/Input';
import Link from '../components/Link';
import Select from '../components/Select';

function signUpDonator() {
  return (
    <div>
      <Header title="We are very pleased to welcome a new school!" />
      <Main>
        <div>
          <Input placeHolder="Name" />
          <Input placeHolder="Email" />
          <Input placeHolder="Password" />
          <Input placeHolder="Phone number" />
          <Input placeHolder="Complete address" />
          <Select placeHolder="Selec items needed..." />
          <Input placeHolder="Upload a photo" />
          <Input placeHolder="MAP" />
          <Link to="/map" className="solid">
            Submit
          </Link>
        </div>
      </Main>
    </div>
  );
}

export default signUpDonator;
