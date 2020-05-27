import React, { useState, useEffect } from 'react';

import { fetchCountries } from '~/services/api';
import { Container, Picker } from './styles';

const CountryPicker = ({ onCountryChange, countries }) => {
  const [selectedValue, setSelectedValue] = useState('');

  function handleCountryChange (country) {
    setSelectedValue(country);
    onCountryChange(country);
  }

  return (
    <Container>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => handleCountryChange(itemValue)}
      >
        <Picker.Item label="Global" value="" />
        { countries.map((country, i) => <Picker.Item key={i} label={country} value={country} />) }
      </Picker>
    </Container>
  );
}

export default CountryPicker;