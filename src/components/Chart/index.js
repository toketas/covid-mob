import React, { useState, useEffect } from 'react';
import PureChart from 'react-native-pure-chart';

import { fetchDailyData } from '~/services/api';
import { Container } from './styles';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    }

    // fetchAPI();
  }, [])

  return (
    <Container>
    </Container>
  );
}

export default Chart;