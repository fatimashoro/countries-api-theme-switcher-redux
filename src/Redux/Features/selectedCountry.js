import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}


export const selectedCountry = createSlice({
    name: 'country',
    initialState,
    reducers: {
        selctedCountryData: (state, action) => {
            state.value = action.payload
        },

    },
})


export const { selctedCountryData } = selectedCountry.actions

export default selectedCountry.reducer


