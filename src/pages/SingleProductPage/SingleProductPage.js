import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productAdded, productUpdated } from '../../features/cart/cartSlice'
import { single_product_url } from '../../utils/constants'
import { formatPrice } from '../../utils/helpers'
import {
  Path,
  Spinner,
  ProductImages,
  Stars,
  Colors,
  AddToCart,
} from '../../components'
import { PrimaryButton } from '../../components/Buttons'
import styles from './SingleProductPage.module.scss'
import axios from 'axios'

export default function SingleProductPage() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [currentColor, setCurrentColor] = useState('')
  const [numItems, setNumItems] = useState(1)

  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchProductById(id) {
      setLoading(true)
      const response = await axios.get(single_product_url + id)
      if (response) {
        response.data.price = response.data.price / 100
        setProduct(response.data)
        const { colors } = response.data
        setCurrentColor(colors ? colors[0] : '')
      }
      setLoading(false)
    }

    fetchProductById(id)
  }, [id])

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    colors,
    images,
  } = product

  // cart is a Map object
  const cart = useSelector((state) => state.cart)

  const onColorChanged = (color) => setCurrentColor(color)
  const onItemIncreased = () => setNumItems(numItems + 1)
  const onItemDecreased = () => setNumItems(numItems - 1)
  const onCartAdded = () => {
    const { id, images, price, stock } = product
    const index = cart.findIndex((item) => item.id === id + currentColor)
    if (index === -1) {
      dispatch(
        productAdded({
          id: id,
          image: images ? images[0] : '',
          name,
          color: currentColor,
          price,
          quantity: numItems,
          stock,
        })
      )
    } else {
      dispatch(productUpdated({ id: id + currentColor, payload: numItems }))
    }
  }

  let content = null
  if (loading) {
    content = <Spinner />
  } else {
    content = (
      <>
        <Path productName={name} />
        <div className={styles.SingleProduct}>
          <PrimaryButton clicked={() => navigate('/products')}>
            back to products
          </PrimaryButton>
          <div className={styles.ProductContent}>
            <ProductImages className={styles.ProductImages} images={images} />
            <div className={styles.ProductInfo}>
              <h1 className={styles.Name}>{name}</h1>
              <div className={styles.Reviews}>
                <Stars numStars={stars} />{' '}
                <span>({reviews} customer reviews)</span>
              </div>
              <h3 className={styles.Price}>{formatPrice(price)}</h3>
              <p className={styles.Description}>{description}</p>
              <div className={styles.Details}>
                <p>
                  <span>Available :</span>
                  <span>{stock ? 'In Stock' : 'Out Of Stock'}</span>
                </p>
                <p>
                  <span>SKU :</span>
                  <span>{sku}</span>
                </p>
                <p>
                  <span>Brand :</span>
                  <span>{company}</span>
                </p>
                <p>
                  <span>Colors :</span>
                  <Colors
                    colorsList={colors}
                    currentColor={currentColor}
                    onColorChanged={onColorChanged}
                  />
                </p>
              </div>
              <AddToCart
                numItems={numItems}
                maxItems={stock}
                onItemIncreased={onItemIncreased}
                onItemDecreased={onItemDecreased}
                onCartAdded={onCartAdded}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  return <div>{content}</div>
}
