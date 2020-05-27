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

export const fetchDailyData = () => {
  return {};
};