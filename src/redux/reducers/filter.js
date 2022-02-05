// import produce from 'immer';

// const initialState = {
//   category: null,
//   sort: 'rating'
// }

// const filter = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_CATEGORY': {
//       return produce(state, draft => { draft.category = action.category })
//     }
//     case 'SET_SORT': {
//       return produce(state, draft => { draft.sort = action.sort })
//     }
//     default: {
//       return state;
//     }
//   }
// }

// export default filter;

import { createSlice } from '@reduxjs/toolkit'

const filter = createSlice({
  name: 'filter',
  initialState: {
    category: null,
    sort: 'rating'
  },
  reducers: {
    setCategoryAC(state, action) {
      state.category = action.payload
    },
    setSortAC(state, action) {
      state.sort = action.payload
    }
  }
})

export default filter.reducer
export const { setCategoryAC, setSortAC } = filter.actions;