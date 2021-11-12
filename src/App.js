import React from 'react'
import {
  Home,
  About,
  Error,
  Cart,
  Checkout,
  Products,
  SingleProduct,
} from './pages'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
