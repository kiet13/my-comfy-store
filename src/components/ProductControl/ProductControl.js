import React from 'react'
import styles from './ProductControl.module.scss'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function ProductControl({
  onItemDecreased,
  onItemIncreased,
  numItems,
  maxItems,
}) {
  const isAvailable = maxItems > 0

  return (
    <div className={styles.ProductControl}>
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
  )
}
