import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: ['Mode S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels']
}

const carSice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSice.reducer