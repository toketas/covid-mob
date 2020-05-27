import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import AnimateNumber from 'react-native-countup';

import { Container, Card, Title, Description, Count, Updated } from './styles';

const Cards = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate} = data;

  if (!confirmed) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <Card>
        <Title>Infected</Title>
        <Count>
          <AnimateNumber countBy={123456} interval={1} initial={0} value={confirmed.value} />
        </Count>
        <Updated>{new Date(lastUpdate).toDateString()}</Updated>
        <Description>Number of active cases of COVID-19</Description>
      </Card> 
      <Card>
        <Title>Recovered</Title>
        <Count>
          <AnimateNumber countBy={12345} interval={1} initial={0} value={recovered.value} />
        </Count>
        <Updated>{new Date(lastUpdate).toDateString()}</Updated>
        <Description>Number of recoveries from COVID-19</Description>
      </Card> 
      <Card>
        <Title>Deaths</Title>
        <Count>
          <AnimateNumber countBy={123456} interval={1} initial={0} value={deaths.value} />
        </Count>
        <Updated>{new Date(lastUpdate).toDateString()}</Updated>
        <Description>Number of deaths from COVID-19</Description>
      </Card> 
    </Container>
  );
}

export default Cards;