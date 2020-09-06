import React from 'react';
import styled from 'styled-components';

// Import components
import Header from '../components/Header';
import Select from '../components/Select';

const Main = styled.main`
  height: calc(100vh - 191px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function Map() {
  return (
    <div>
      <Header title="Donation points near you." />
      <Main>
        <p>Leaflet map api</p>
        <Select placeHolder="Filter by items..." />
      </Main>
    </div>
  );
}

export default Map;
