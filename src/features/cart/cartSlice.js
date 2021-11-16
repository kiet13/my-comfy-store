import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    cartHydrated: (state, action) => {
      return action.payload
    },
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
      const { id, ...payload } = action.payload
      const index = state.findIndex((item) => item.id === id)
      const { quantity } = payload || {}
      Object.assign(state[index], {
        ...payload,
        subtotal: (quantity || 0) * state[index].price,
      })
    },
    productDeleted: (state, action) => {
      const { id } = action.payload
      const index = state.findIndex((item) => item.id === id)
      state.splice(index, 1)
    },
    productsCleared: () => {
      return initialState
    },
  },
})

export const {
  productAdded,
  productUpdated,
  productDeleted,
  productsCleared,
  cartHydrated,
} = cartSlice.actions
export default cartSlice.reducer

export const getNumCartItems = (state) => {
  return state.cart.reduce((prev, curr) => {
    return prev + curr.quantity
  }, 0)
}

export const getTotalCost = (state) => {
  return state.cart.reduce((prev, curr) => {
    return prev + curr.subtotal
  }, 0)
}
