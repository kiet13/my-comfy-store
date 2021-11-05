import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getFeatureProducts,
  fetchFeatureProducts,
} from '../../../features/products/productsSlice'
import styles from './FeatureSection.module.scss'
import Product from '../../../features/products/Product/Product'
import { PrimaryButton } from '../../../components/Buttons'
import { useNavigate } from 'react-router-dom'

export default function FeatureSection() {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.products.status)
  const featureProducts = useSelector(getFeatureProducts)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFeatureProducts())
    }
  }, [status, dispatch])

  const content = featureProducts.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ))

  return (
    <section className={styles.FeatureSection}>
      <h1 className={styles.FeatureHeading}>Featured Products</h1>
      <div className={styles.FeatureContent}>{content}</div>
      <PrimaryButton clicked={() => navigate('/products')}>
        All products
      </PrimaryButton>
    </section>
  )
}
