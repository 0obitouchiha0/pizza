import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ category, sort }) => {
    const res = await axios
      .get(`http://localhost:3001/pizzas?_sort=${sort}${category !== null ? `&category=${category}` : ''}`)
      .then(({ data }) => {
        return data;
      })
    return res;
  }
)


const pizzas = createSlice({
  name: 'pizzas',
  initialState: {
    items: [],
    isLoaded: false
  },
  reducers: {},
  extraReducers: {
    [getPizzas.pending]: (state) => {
      state.isLoaded = false
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.isLoaded = true
    }
  }
})

export default pizzas.reducer;