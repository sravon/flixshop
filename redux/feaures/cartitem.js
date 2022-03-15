import { createSlice } from '@reduxjs/toolkit'

export const cartitem = createSlice({
  name: 'cart',
  initialState: {
    product: [],
  },
  reducers: {
    ADD_TO_CART: (state, action) => {
      const itemExists = state.product.find((item) => item.id === action.payload.id);
      if (itemExists) {
        if(action.payload.quantity > 1){
          itemExists.quantity = action.payload.quantity;
        }else{
          itemExists.quantity = 1
        }
        
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
      }
    },
    initialLoad: (state, action) => {
      state.product = action.payload ;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, initialLoad, incrementByAmount } = cartitem.actions

export default cartitem.reducer