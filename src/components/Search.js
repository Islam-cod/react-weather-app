import React from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import {GEO_API_URL, geoApiOptions} from './api';
import { useState } from 'react';

const Search = ({onSearchchange}) => {
   const [search, setSearch] = useState(null);

   const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

    const handleOnChange = (searchData) => {
         setSearch(searchData);
        onSearchchange(searchData);
    }


    return (
    <AsyncPaginate
        placeholder="Search the city"
        value={search}
        debounceTimeout={600}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
  )
}

export default Search;