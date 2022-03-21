import { createSlice } from '@reduxjs/toolkit'

export const userdata = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoggedIn: false
  },
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
      console.log(state)
    },
    logoutuser: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setuser, logoutuser, incrementByAmount } = userdata.actions

export default userdata.reducer