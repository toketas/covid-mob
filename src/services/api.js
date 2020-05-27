import axios from 'axios';

const baseURL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let url = baseURL;

  if (country) {
    url = `${baseURL}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${baseURL}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async (country) => {
  const currentDate = `${new Date().getMonth() + 1}-${new Date().getDate() - 1}-${new Date().getFullYear()}`;
  const lastDate = `${new Date().getMonth() + 1}-${new Date().getDate() - 2}-${new Date().getFullYear()}`;
  const { data } = await axios.get(`${baseURL}/daily/${currentDate}`);
  const last = await axios.get(`${baseURL}/daily/${lastDate}`);

  const countryData = data.filter(item => item.countryRegion === country);
  const lastData = last.data.filter(item => item.countryRegion === country);

  let confirmed = 0;
  let recovered = 0;
  let deaths = 0;

  countryData.forEach(item => {
    confirmed += parseInt(item.confirmed);
    recovered += parseInt(item.recovered);
    deaths += parseInt(item.deaths);
  });

  lastData.forEach(item => {
    confirmed -= parseInt(item.confirmed);
    recovered -= parseInt(item.recovered);
    deaths -= parseInt(item.deaths);
  })

  return { confirmed, recovered, deaths };
};