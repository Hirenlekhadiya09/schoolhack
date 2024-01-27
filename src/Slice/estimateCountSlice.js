import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: {},
    isLoading: false,
  },
  reducers: {
    incrementByAmount: (state, action) => {
    state.count = action.payload;
        
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions

export default counterSlice.reducer