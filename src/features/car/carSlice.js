import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: ['mode s', 'model 3', 'model x', 'model y']
}

const carSice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSice.reducer