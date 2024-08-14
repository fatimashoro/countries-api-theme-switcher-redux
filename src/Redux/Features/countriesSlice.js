import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

//api call
const API_URL = 'https://restcountries.com/v3.1/all'
export const fetchCountriesAPI = createAsyncThunk("posts/fetchCountriesAPI", async () => {
    try {
        const response = await axios.get(API_URL)
        return response?.data
    } catch (error) {
        return error.message
    }
})

const initialState = {
    value: [],
    allCountries: [],
    isLoadding: false,
    Error: null
}
// console.log("aya ke nahi data",initialState.value)

export const countriesSlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        searchByName: (state, action) => {
            state.value = state.allCountries.filter((filterItem) => (
                filterItem.name.common.toLowerCase().startsWith(action.payload.toLowerCase())
            ))
        },
        // searchByRegion: (state, action) => {
        //     state.value = state.allCountries.filter((country) => (
        //         country.region.toLowerCase().includes(action.payload.toLocaleLowerCase())
        //     ))
        // }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCountriesAPI.pending, (state, action) => {
                state.isLoadding = true
            })
            .addCase(fetchCountriesAPI.fulfilled, (state, action) => {
                state.isLoadding = false
                state.value = action.payload;
                state.allCountries = action.payload;
            })
            .addCase(fetchCountriesAPI.rejected, (state, action) => {

                state.Error = action.error.message
            })
    }

})


export const { searchByName } = countriesSlice.actions

export default countriesSlice.reducer

