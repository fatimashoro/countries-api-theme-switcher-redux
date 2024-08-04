import { createSlice } from '@reduxjs/toolkit'
import data from '../../data.json'  
const initialState = {
    value: [],
    allCountries: []
}
// console.log("aya ke nahi data",initialState.value)

export const countriesSlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        getAPIData: (state, action) => {
            state.value = data;
            state.allCountries = data;
        },
        searchByName: (state, action) => {
            state.value = state.allCountries.filter((filterItem) => (
                filterItem.name.toLowerCase().startsWith(action.payload.toLowerCase())
            ))
        },
        searchByRegion: (state, action) => {
            state.value = state.allCountries.filter((country) => (
                country.region.toLowerCase().includes(action.payload.toLocaleLowerCase())
            ))
        }
    },
})


export const { getAPIData, searchByName, searchByRegion } = countriesSlice.actions

export default countriesSlice.reducer

