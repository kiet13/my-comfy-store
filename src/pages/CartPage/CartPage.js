import React from 'react'
import styles from './CartPage.module.scss'
import { Path } from '../../components'
import CartList from '../../features/cart/CartList/CartList'
import { formatPrice } from '../../utils/helpers'
import { useSelector } from 'react-redux'
import { getTotalCost } from '../../features/cart/cartSlice'
import { PrimaryButton } from '../../components/Buttons'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const SHIP_FEE = 5.34

export default function CartPage() {
  const navigate = useNavigate()
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const subtotal = useSelector(getTotalCost)
  const total = subtotal + SHIP_FEE

  async function onLoginHandle() {
    await loginWithRedirect()
    navigate('/cart')
  }

  let continuedBtn = null
  if (isAuthenticated) {
    continuedBtn = (
      <PrimaryButton
        className={styles.CheckoutButton}
        clicked={() => navigate('/checkout')}
      >
        proceed to checkout
      </PrimaryButton>
    )
  } else {
    continuedBtn = (
      <PrimaryButton className={styles.CheckoutButton} clicked={onLoginHandle}>
        login
      </PrimaryButton>
    )
  }

  let content = null
  if (subtotal === 0) {
    content = (
      <div className={styles.EmptyCartPage}>
        <h1>Your cart is empty</h1>
        <PrimaryButton clicked={() => navigate('/products')}>
          Fill it
        </PrimaryButton>
      </div>
    )
  } else {
    content = (
      <>
        <Path />
        <div className={styles.CartPage}>
          <CartList />
          <div className={styles.CartListInfo}>
            <div className={styles.CartCost}>
              <h3>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </h3>
              <p>
                <span>Shipping fee</span>
                <span>{formatPrice(SHIP_FEE)}</span>
              </p>
              <h2>
                <span>Order Total</span>
                <span>{formatPrice(total)}</span>
              </h2>
            </div>
            {continuedBtn}
          </div>
        </div>
      </>
    )
  }

  return content
}
