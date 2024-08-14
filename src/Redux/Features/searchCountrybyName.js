import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

//api call

export const fetchDATAbyNAme = createAsyncThunk("posts/fetchDATAbyNAme", async (name) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
        return response?.data
    } catch (error) {
        return error.message
    }
})

const initialState = {
    
    searchedCountry: [],
    isLoadding: false,
    Error: null
}
export const searchCountrybyNAme = createSlice({
    name: 'country',
    initialState,
    reducers: {
        clearSearch: (state) => {
            state.searchedCountry = [];
            state.isLoadding = false;
            state.Error = null;
          }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchDATAbyNAme.pending, (state, action) => {
                state.isLoadding = true
            })
            .addCase(fetchDATAbyNAme.fulfilled, (state, action) => {
                state.isLoadding = false
             
                state.searchedCountry = action.payload;
            })
            .addCase(fetchDATAbyNAme.rejected, (state, action) => {

                state.Error = action.error.message
            })
    }

})



export const { clearSearch } = searchCountrybyNAme.actions;
export default searchCountrybyNAme.reducer

