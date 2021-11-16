import React from 'react'
import styles from './CartList.module.scss'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../../components/Buttons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productsCleared } from '../cartSlice'

export default function CartList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const renderedCartItems = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  return (
    <div className={styles.CartList}>
      <h1 className={styles.Heading}>
        <span className={styles.ItemHeading}>Item</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
        <span></span>
      </h1>
      <div className={styles.CartItems}>{renderedCartItems}</div>
      <div className={styles.Buttons}>
        <PrimaryButton
          className={styles.BackToShopping}
          clicked={() => navigate('/products')}
        >
          Continue Shopping
        </PrimaryButton>
        <button
          className={styles.Clear}
          onClick={() => dispatch(productsCleared())}
        >
          Clear Shopping Cart
        </button>
      </div>
    </div>
  )
}
