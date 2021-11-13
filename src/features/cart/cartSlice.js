import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    productAdded: (state, action) => {
      const { id, image, name, color, price, quantity, stock } = action.payload
      state.push({
        id: id + color,
        image,
        name,
        color,
        price,
        quantity,
        stock,
        subtotal: price * quantity,
      })
    },
    productUpdated: (state, action) => {
      const { id, payload } = action.payload
      const index = state.findIndex((item) => item.id === id)
      const currVal = state[index]
      state[index].quantity = Math.min(
        currVal.quantity + payload,
        currVal.stock
      )
    },
    productDeleted: (state, action) => {
      const { id } = action.payload
      const index = state.findIndex((item) => item.id === id)
      state.splice(index, 1)
    },
  },
})

export const { productAdded, productUpdated, productDeleted } =
  cartSlice.actions
export default cartSlice.reducer
