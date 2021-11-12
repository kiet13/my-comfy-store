import React from 'react'
import styles from './AddToCart.module.scss'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { PrimaryButton } from '../Buttons'

export default function AddToCart({
  numItems,
  maxItems,
  onItemIncreased,
  onItemDecreased,
}) {
  const isAvailable = maxItems > 0

  return (
    <div className={styles.AddToCart}>
      <div className={styles.ItemControls}>
        <button
          className={styles.Control}
          onClick={onItemDecreased}
          disabled={numItems === 1}
        >
          <FaMinus />
        </button>
        <span className={styles.NumItems}>{numItems}</span>
        <button
          className={styles.Control}
          onClick={onItemIncreased}
          disabled={numItems === maxItems || !isAvailable}
        >
          <FaPlus />
        </button>
      </div>

      <PrimaryButton disabled={!isAvailable}>
        {isAvailable ? 'Add To Cart' : 'Out Of Stock'}
      </PrimaryButton>
    </div>
  )
}
