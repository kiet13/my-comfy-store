import React from 'react'
import styles from './Product.module.scss'
import { formatPrice } from '../../../utils/helpers'

export default function Product({ image, name, price }) {
  return (
    <div className={styles.Product}>
      <img className={styles.ProductImage} src={image} alt='product' />
      <p className={styles.ProductInfo}>
        <span className={styles.ProductName}>{name}</span>
        <span className={styles.ProductPrice}>{formatPrice(price)}</span>
      </p>
    </div>
  )
}
