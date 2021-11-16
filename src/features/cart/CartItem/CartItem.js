import React from 'react'
import styles from './CartItem.module.scss'
import { ProductControl } from '../../../components'
import { useDispatch } from 'react-redux'
import { productUpdated, productDeleted } from '../cartSlice'
import { formatPrice } from '../../../utils/helpers'
import { DeleteButton } from '../../../components/Buttons'

export default function CartItem({ item }) {
  const { id, image, name, color, price, quantity, stock, subtotal } = item
  const dispatch = useDispatch()

  return (
    <div className={styles.CartItem}>
      <div className={styles.Item}>
        <img src={image} alt='item' />
        <div className={styles.ItemInfo}>
          <h3>{name}</h3>
          <p>
            Color:{' '}
            <span className={styles.Color} style={{ background: color }}></span>
          </p>
        </div>
      </div>
      <span className={styles.Price}>{formatPrice(price)}</span>
      <div className={styles.ProductControl}>
        <ProductControl
          numItems={quantity}
          maxItems={stock}
          onItemDecreased={() =>
            dispatch(
              productUpdated({
                id,
                quantity: quantity - 1,
              })
            )
          }
          onItemIncreased={() =>
            dispatch(
              productUpdated({
                id,
                quantity: quantity + 1,
              })
            )
          }
        />
      </div>
      <span className={styles.Subtotal}>{formatPrice(subtotal)}</span>
      <DeleteButton clicked={() => dispatch(productDeleted(id))} />
    </div>
  )
}
