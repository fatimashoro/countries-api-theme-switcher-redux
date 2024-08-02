import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dark: false,
    systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const themeSwitcher = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state, action) => {
            state.dark = !state.dark
        },
        systemBasedThemeChange: (state, action) => {
            state.systemTheme = action.payload;
            state.dark = action.payload
        }

    },
})


export const { switchTheme, systemBasedThemeChange } = themeSwitcher.actions

export default themeSwitcher.reducer