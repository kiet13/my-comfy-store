import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './Button.module.scss'

export default function CartButton({ numItems, clicked }) {
  return (
    <button className={styles.CartButton} onClick={clicked}>
      <span className={styles.Text}>Cart</span>
      <div className={styles.CartIcon}>
        <FaShoppingCart />
        <span className={styles.NumItems}>{numItems}</span>
      </div>
    </button>
  )
}
