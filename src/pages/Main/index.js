import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Cards from '~/components/Cards';
import CountryPicker from '~/components/CountryPicker';

import { Container, Footer, FooterText } from './styles';

import { fetchData, fetchCountries, fetchDailyData } from '~/services/api';


const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState();
  const [countries, setCountries] = useState([]);
  const [dailyData, setDailyData] = useState({});

  async function fetch(country) {
    const data = await fetchData(country);
    const dailyData = await fetchDailyData(country);

    setDailyData(dailyData);
    setData(data);
  }

  useEffect(() => {
    fetch();
    const fetchCountriesAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchCountriesAPI();
  }, []);

  function onCountryChange (country) {
    fetch(country);
    setCountry(country);
  }

  return (
    <Container>
      <Container>
        <Cards data={data} dailyData={dailyData}  country={country} />
        <CountryPicker countries={countries} onCountryChange={onCountryChange} />
      </Container>
      <Footer>
        <FooterText>Made with <Icon name="heart" color="#fff" /> by toketas</FooterText>
      </Footer>
    </Container>
  );
}

export default Main;