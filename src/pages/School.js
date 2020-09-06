import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Main from '../components/Main';
import Button from '../components/Button';

const Div = styled.div`
  img {
    width: 100%;
  }
  h4 {
    color: var(--lightgray);
    font-weight: normal;
    font-size: 0.8em;
    margin-top: 10px;
  }
  p,
  address {
    color: var(--primary);
    margin-top: 4px;
    font-style: normal;
  }
`;

function school() {
  return (
    <div>
      <Header title="School of the new tomorrow" />
      <Main>
        <Div>
          <img src={require('../uploads/school.jpg')} />

          <h4>E-mail</h4>
          <p>contact@newtomorrowschool.com </p>

          <h4>Phone number</h4>
          <p>11 555-242431 </p>

          <h4>Address</h4>
          <address>
            88 New Tomorrow Avenue, #80808
            <br />
            New City, Point Place, 888008
          </address>

          <h4>Items needed</h4>
          <p>Computer, Monitor, Hard Drive</p>
        </Div>

        <Button solid>Make a Donation</Button>
      </Main>
    </div>
  );
}

export default school;
