import React, { useState, useEffect } from 'react';

import { Container, Number, CardInfected, CardRecovered, CardDeaths } from './styles';

const DailyData = ({ dailyData }) => {
  const { confirmed, recovered, deaths } = dailyData;
  return (
    <Container>
      <CardInfected>
        <Number>{confirmed}</Number>
      </CardInfected>
      <CardRecovered>
        <Number>{recovered}</Number>
      </CardRecovered>
      <CardDeaths>
        <Number>{deaths}</Number>
      </CardDeaths>
    </Container>
  );
}

export default DailyData;