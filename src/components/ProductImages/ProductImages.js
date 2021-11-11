import React, { useState } from 'react'
import styles from './ProductImages.module.scss'

export default function ProductImages({ images }) {
  const [currImgIndex, setCurrImgIndex] = useState(0)

  const renderedImgs = images.map((image, index) => {
    const subImgClasses = [styles.SubImages]
    if (index === currImgIndex) {
      subImgClasses.push(styles.ChoosedImage)
    }
    return (
      <img
        className={subImgClasses.join(' ')}
        key={image.id}
        src={image.url}
        alt='product'
        onClick={() => setCurrImgIndex(index)}
      />
    )
  })

  const { url: mainImgSrc } = images[currImgIndex]

  return (
    <div className={styles.ProductImages}>
      <div className={styles.MainImage}>
        <img src={mainImgSrc} alt='main' />
      </div>
      {renderedImgs}
    </div>
  )
}
