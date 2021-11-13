import React from 'react'
import styles from './AddToCart.module.scss'
import ProductControl from '../ProductControl/ProductControl'
import { PrimaryButton } from '../Buttons'

export default function AddToCart({
  numItems,
  maxItems,
  onItemIncreased,
  onItemDecreased,
  onCartAdded,
}) {
  const isAvailable = maxItems > 0

  return (
    <div className={styles.AddToCart}>
      <ProductControl
        numItems={numItems}
        maxItems={maxItems}
        onItemDecreased={onItemDecreased}
        onItemIncreased={onItemIncreased}
      />
      <PrimaryButton disabled={!isAvailable} clicked={onCartAdded}>
        {isAvailable ? 'Add To Cart' : 'Out Of Stock'}
      </PrimaryButton>
    </div>
  )
}
