import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './Features/countriesSlice';
import selectedCountry from './Features/selectedCountry';
import regionSlice from './Features/regionSlice';
import themeSwitcher from './Features/themeSwitcher';
import searchCountrybyName from './Features/searchCountrybyName';


 const store = configureStore({
  reducer: {
    countries:countriesSlice,
    selectedCountry:selectedCountry,
    region:regionSlice,
    toggleTheme:themeSwitcher,
    searchCountrybyName:searchCountrybyName,
  },
})

export default store