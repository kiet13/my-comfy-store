import React from 'react'
import styles from './Product.module.scss'
import { formatPrice } from '../../../utils/helpers'
import { SearchButton } from '../../../components/Buttons'
import { useNavigate } from 'react-router-dom'

export default function Product({ id, image, name, price }) {
  const navigate = useNavigate()

  return (
    <div className={styles.Product} onClick={() => navigate(`/products/${id}`)}>
      <div className={styles.ProductImage}>
        <img src={image} alt='product' />
        <SearchButton className={styles.ProductSearch} />
      </div>

      <p className={styles.ProductInfo}>
        <span className={styles.ProductName}>{name}</span>
        <span className={styles.ProductPrice}>{formatPrice(price)}</span>
      </p>
    </div>
  )
}
