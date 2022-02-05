// import produce from 'immer';

// const initialState = {
//   items: {},
//   totalCount: 0,
//   totalPrice: 0
// }

// const cart = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_NEW_PIZZA': {
//       return produce(state, draft => {
//         if (draft.items[action.item.id]) {
//           draft.items[action.item.id].items.push(action.item);
//           draft.items[action.item.id].totalCount++;
//           draft.items[action.item.id].totalPrice += action.item.price;
//         } else {
//           draft.items[action.item.id] = {
//             items: [action.item],
//             totalCount: 1,
//             totalPrice: action.item.price
//           }
//         }
//         draft.totalCount++;
//         draft.totalPrice += action.item.price;
//       })
//     }
//     case 'CLEAR_CART': {
//       return produce(state, draft => {
//         draft.items = {};
//         draft.totalCount = 0;
//         draft.totalPrice = 0;
//       })
//     }
//     case 'DELETE_WHOLE_GROUP': {
//       return produce(state, draft => {
//         draft.totalCount -= draft.items[action.id].totalCount;
//         draft.totalPrice -= draft.items[action.id].totalPrice;
//         delete draft.items[action.id]
//       })
//     }
//     case 'DELETE_ONE_PIZZA': {
//       return produce(state, draft => {
//         if (draft.items[action.id].items.length > 1) {
//           draft.items[action.id].totalCount--;
//           draft.items[action.id].totalPrice -= draft.items[action.id].items[0].price;
//           draft.items[action.id].items.splice(0, 1);
//           draft.totalCount--;
//           draft.totalPrice -= draft.items[action.id].items[0].price;
//         }
//       })

//     }
//     case 'ADD_ONE_PIZZA': {
//       return produce(state, draft => {
//         draft.items[action.id].items.push(draft.items[action.id].items[0]);
//         draft.items[action.id].totalCount++;
//         draft.items[action.id].totalPrice += draft.items[action.id].items[0].price;
//         draft.totalCount++;
//         draft.totalPrice += draft.items[action.id].items[0].price;
//       })
//     }
//     default: {
//       return state;
//     }
//   }
// }

// export default cart;


import { createSlice } from '@reduxjs/toolkit';


const cart = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalCount: 0,
    totalPrice: 0
  },
  reducers: {
    addNewPizza(state, { payload }) {
      if (state.items[payload.id]) {
        state.items[payload.id].items.push(payload);
        state.items[payload.id].totalCount++;
        state.items[payload.id].totalPrice += payload.price;

      } else {
        state.items[payload.id] = {
          items: [payload],
          totalCount: 1,
          totalPrice: payload.price
        }
      }
      state.totalCount++;
      state.totalPrice += payload.price;
    },
    clearCart(state) {
      state.items = {}
      state.totalCount = 0
      state.totalPrice = 0
    },
    deleteWholeGroup(state, { payload }) {
      state.totalCount -= state.items[payload].totalCount;
      state.totalPrice -= state.items[payload].totalPrice;
      delete state.items[payload]
    },
    deleteOnePizza(state, { payload }) {
      if (state.items[payload].items.length > 1) {
        state.items[payload].totalCount--;
        state.items[payload].totalPrice -= state.items[payload].items[0].price;
        state.items[payload].items.splice(0, 1);
        state.totalCount--;
        state.totalPrice -= state.items[payload].items[0].price;
      }
    },
    addOnePizza(state, { payload }) {
      state.items[payload].items.push(state.items[payload].items[0]);
      state.items[payload].totalCount++;
      state.items[payload].totalPrice += state.items[payload].items[0].price;
      state.totalCount++;
      state.totalPrice += state.items[payload].items[0].price;
    }
  }
})

export default cart.reducer;

export const { addNewPizza, clearCart, deleteWholeGroup, deleteOnePizza, addOnePizza } = cart.actions