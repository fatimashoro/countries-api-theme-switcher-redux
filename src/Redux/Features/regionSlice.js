// src/Redux/Features/searchByRegionSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; 

//api 
export const fetchCountriesAPIbyRegion = createAsyncThunk("fetchCountriesAPIbyRegion", async (selectedRegion) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
        return response?.data
    } catch (error) {
        return error.message
    }
})

const initialState = {
    isLoadding :false,
  filteredCountries: [],
  regionError:null
};

const searchByRegionSlice = createSlice({
  name: 'searchByRegion',
  initialState,
  reducers: {
    searchByRegion: (state, action) => {
  },
},
extraReducers(builder) {
    builder
        .addCase(fetchCountriesAPIbyRegion.pending, (state, action) => {
            state.isLoadding = true
        })
        .addCase(fetchCountriesAPIbyRegion.fulfilled, (state, action) => {
            state.isLoadding = false
            state.filteredCountries = action.payload;
        })
        .addCase(fetchCountriesAPIbyRegion.rejected, (state, action) => {

            state.regionError = action.error.message
        })
}
});

export const { searchByRegion, setAllCountries } = searchByRegionSlice.actions;
export default searchByRegionSlice.reducer;
