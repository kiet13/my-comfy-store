import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { products_url } from '../../utils/constants'

const initialState = {
  products: [],
  featureProducts: [],
  status: 'idle',
  error: null,
}

export const fetchProducts = createAsyncThunk(
  '/products/fetchProducts',
  async () => {
    const response = await axios.get(products_url)
    return response.data
  }
)

export const fetchFeatureProducts = createAsyncThunk(
  '/products/fetchFeatureProducts',
  async () => {
    const response = await axios.get(products_url)
    return response.data.slice(0, 3)
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched products to the array
        state.products = state.products.concat(action.payload)
      })
      .addCase(fetchFeatureProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched products to the array
        const data = action.payload.map((item) => {
          return { ...item, price: item.price / 100 }
        })

        state.featureProducts = state.featureProducts.concat(data)
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.status = 'loading'
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
      )
  },
})

export const getAllProducts = (state) => state.products.products
export const getProductById = (state, id) =>
  state.products.products.find((product) => product.id === id)
export const getFeatureProducts = (state) => state.products.featureProducts

export default productsSlice.reducer
