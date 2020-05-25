import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect, InputLabel } from "@material-ui/core";
import { fetchCountries } from "../../api/index";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <div className="row">
      <FormControl>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Country
        </InputLabel>
        <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
