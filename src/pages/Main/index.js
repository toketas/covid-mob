import React, { useState, useEffect } from 'react';

import Cards from '~/components/Cards';
import CountryPicker from '~/components/CountryPicker';
import Chart from '~/components/Chart';

import { Container } from './styles';

import { fetchData, fetchCountries } from '~/services/api';


const Main = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState();
  const [countries, setCountries] = useState([]);

  async function fetch(country) {
    const data = await fetchData(country);
    
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
      <Cards data={data} />
      <CountryPicker countries={countries} onCountryChange={onCountryChange} />
      <Chart data={data} country={country} />
    </Container>
  );
}

export default Main;